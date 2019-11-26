import React, { Component } from "react";
import { Doughnut } from "react-chartjs-2";

export default class DoughnutChart extends Component {
  render() {
    const { fetchedMovies } = this.props;
    var engmvoies = fetchedMovies.filter(item => item.lang === "English");
    var hinmovies = fetchedMovies.filter(item => item.lang === "Hindi");
    var telmovies = fetchedMovies.filter(item => item.lang === "Telugu");
    const data = {
      labels: ["English", "Hindi", "Telugu"],
      datasets: [
        {
          data: [engmvoies.length, hinmovies.length, telmovies.length],
          backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
          hoverBackgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"]
        }
      ]
    };

    return (
      <div>
        <h4>Movies</h4>
        <Doughnut data={data} />
      </div>
    );
  }
}
