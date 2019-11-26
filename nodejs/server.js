var express = require("express");
var app = express();

const bodyParser = require("body-parser");
const mysql = require("mysql");

const cors = require("cors");
app.use(cors());
app.options("*", cors());
app.use(bodyParser.json());

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "bookmyshow"
});

app.post("/signup", function(req, res) {
  const signinInputs = req.body;
  role = signinInputs.vendor !== undefined && signinInputs.vendor === "on" ? "vendor" : "user"
  var records = [
    [signinInputs.username, signinInputs.email, signinInputs.password, role]
  ];
  connection.query(
    "INSERT INTO users(username, email, password, role) VALUES  ?",
    [records],
    function(error, results, next) {
      if (error) {
        res.send({
          status: 400,
          message: "Email already exists"
        });
      } else {
        res.send({
          status: 200,
          message: "successfully registered"
        });
      }
    }
  );
});

app.post("/login", function(req, res) {
  const loginInputs = req.body;
  var role;
  connection.query(
    "select email, password,role from users where email = ? and password = ?",
    [loginInputs.email, loginInputs.password],
    function(error, results, next) {
      if (results.length !== 0) {
        const actualEmail = results[0].email;
        role = results[0].role;
        if (loginInputs.email === actualEmail) {
          let token;
          connection.query(
            "select token from users where email = ?",
            [loginInputs.email],
            function(error, results, next) {
              token = results;
            }
          );
          if (token === undefined) {
            token = new Date().getTime() + 557000;
            connection.query(
              "update users set token = ? where email = ?",
              [token, loginInputs.email],
              function(error, results, next) {}
            );
          } else if (token < new Date().getTime()) {
            res.send({
              status: 401,
              message: "Session expired"
            });
          }
          res.send({
            status: 200,
            message: "Login successfully",
            email: loginInputs.email,
            token: token,
            role: role
          });
        } else {
          res.send({
            status: 400,
            message: "Incorrect Password entered"
          });
        }
      } else {
        res.send({
          status: 400,
          message: "Incorrect Details"
        });
      }
    }
  );
});

app.post("/addmovies", function(req, res) {
  const addmoviesInputs = req.body;
  var movieRecord = [
    [
      addmoviesInputs.MovieName,
      addmoviesInputs.Language,
      addmoviesInputs.Genre,
      addmoviesInputs.ReleaseDate,
      addmoviesInputs.Rating,
      addmoviesInputs.PosterUrl
    ]
  ];
  connection.query(
    "INSERT INTO movies(name,lang,genre,release_date,rating,poster_url) VALUES  ?",
    [movieRecord],
    function(error, results, next) {
      if (error) {
        res.send({
          status: 400,
          message: "Enter the correct details"
        });
      } else {
        res.send({
          status: 200,
          message: "Successfully Added"
        });
      }
    }
  );
});

app.get("/fetchmovies", function(req, res) {
  connection.query("select * from movies", function(error, results, next) {
    if (error) throw error;
    res.send(results);
  });
});

app.get("/theatres", function(req, res) {
  connection.query("select * from theatres", function(error, results, next) {
    if (error) throw error;
    res.send(results);
  });
});

app.post("/logout", function(req, res) {
  const email = req.body.email;
  connection.query(
    "SELECT email from users WHERE email = ? ",
    [email],
    function(error, results, next) {
      if (results.length !== 0) {
        const email = results[0].email;
        if (email !== undefined) {
          connection.query(
            "update users set token = ? where email = ?",
            [null, email],
            function(error, results, next) {
              if (error) {
                res.send({
                  status: 400,
                  message: "Incorrect Details"
                });
              } else {
                res.send({
                  status: 200,
                  message: "Logged out successfully"
                });
              }
            }
          );
        }
      }
    }
  );
});

// app.post("/reservedseats", function(req, res) {
//   const reservedSeats = req.body.reservedSeats;
//   const theater_id = req.body.theater_id;
//   let txnStatus = true;
//   const getBookedSeatsQuery = `select count(*) from tickets_booked where theatre_id = ?`;
//   let noOfBookedSeatsInTheater = 0;
//   connection.query(getBookedSeatsQuery, [theater_id], function(
//     error,
//     results,
//     next
//   ) {
//     if (error) {
//       console.log("error in fetching noOfBookedSeatsInTheater ::", error);
//       res.send({
//         status: 400,
//         message: "error in fetching noOfBookedSeatsInTheater"
//       });
//     } else {
//       console.log("noOfBookedSeatsInTheater--results ::", results);
//       noOfBookedSeatsInTheater = results;
//     }
//   });
//   const ticketBookingQuery = `INSERT INTO tickets_booked(theatre_id,seat_no,is_reserved) VALUES(?,?,?)`;
//   reservedSeats.forEach(element => {
//     connection.query(ticketBookingQuery, [theater_id, element, true], function(
//       error,
//       results,
//       next
//     ) {
//       console.log("error ::", error);
//       if (error) {
//         console.log("error ::", error);
//         txnStatus = false;
//       } else {
//         console.log("record inserted successfully ::" + element);
//       }
//     }); // query end
//   }); // for-each end
//   if (txnStatus) {
//     res.send({
//       status: 200,
//       message: "successfully booked"
//     });
//   } else {
//     res.send({
//       status: 400,
//       message: "Error in booking ticktes"
//     });
//   }
// });

app.post("/reservedseats", function(req, res) {
  const reservedSeats = req.body.reservedSeats;
  const theatre_id = req.body.theatreId;
  var arr;
  connection.query(
    "select reservedSeats from theatres where id = ?",
    [theatre_id],
    function(error, results, next) {
      if (results[0].reservedSeats !== null) {
        arr = JSON.parse(results[0].reservedSeats);
        reservedSeats.map(item => arr.push(item));
        let a = JSON.stringify(arr);
        connection.query(
          "update theatres set reservedSeats = ? where id = ?",
          [a, theatre_id],
          function(error, results, next) {
            if (error) {
              res.send({
                status: 400,
                message: "tickets have not been booked"
              });
            } else {
              connection.query(
                "select reservedSeats from theatres where id = ?",
                [theatre_id],
                function(error, results, next) {
                  if (results[0].reservedSeats !== null) {
                    res.send({
                      reservedSeats: JSON.parse(results[0].reservedSeats),
                      status: 200,
                      message: "tickets have been booked"
                    });
                  }
                }
              );
            }
          }
        );
      } else {
        let reservedSeats = JSON.stringify(req.body.reservedSeats);
        connection.query(
          "update theatres set reservedSeats = ? where id = ?",
          [reservedSeats, theatre_id],
          function(error, results, next) {
            if (error) {
              res.send({
                status: 400,
                message: "tickets have not been booked"
              });
            } else {
              connection.query(
                "select reservedSeats from theatres where id = ?",
                [theatre_id],
                function(error, results, next) {
                  if (results[0].reservedSeats !== null) {
                    res.send({
                      reservedSeats: JSON.parse(results[0].reservedSeats),
                      status: 200,
                      message: "tickets have been booked"
                    });
                  }
                }
              );
            }
          }
        );
      }
    }
  );
});

app.listen(3000, () => {
  console.log("Go to http://localhost:3000/posts to see posts");
});
