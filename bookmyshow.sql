-- phpMyAdmin SQL Dump
-- version 4.8.5
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Dec 20, 2019 at 07:55 AM
-- Server version: 10.1.40-MariaDB
-- PHP Version: 7.1.29

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `bookmyshow`
--

-- --------------------------------------------------------

--
-- Table structure for table `movies`
--

CREATE TABLE `movies` (
  `movie_id` int(10) NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `lang` varchar(255) DEFAULT NULL,
  `genre` varchar(255) DEFAULT NULL,
  `rating` varchar(255) DEFAULT NULL,
  `release_date` date DEFAULT NULL,
  `poster_url` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `movies`
--

INSERT INTO `movies` (`movie_id`, `name`, `lang`, `genre`, `rating`, `release_date`, `poster_url`) VALUES
(1, 'Mad Max Fury Road', 'English', 'Aciton', '85%', '2019-10-10', 'https://upload.wikimedia.org/wikipedia/en/6/6e/Mad_Max_Fury_Road.jpg'),
(2, 'Fight Club', 'English', 'Action,Drama', '75%', '2020-01-10', 'https://image-cdn.hypb.st/https%3A%2F%2Fhypebeast.com%2Fimage%2F2015%2F06%2Fhollywood-movie-posters-redesigned-6.jpg?q=75&w=800&cbr=1&fit=max'),
(3, 'God Father', 'English', 'Drama,Crime', '95%', '2020-03-07', 'https://cdn.shopify.com/s/files/1/0969/9128/products/Godfather_II_-_Al_Pacino_-_Tallenge_Hollywood_Cult_Classics_Movie_Poster_f214bff8-b251-4f11-8a83-da2bbb5fad6a.jpg?v=1557734073'),
(4, 'Dunkirk', 'English', 'Drama,Mystery', '93%', '2020-04-10', 'https://m.media-amazon.com/images/M/MV5BY2E2OWRjZjktNzMyYy00ZDFkLWE5ZjctYzFjMjNjMjJlY2M0XkEyXkFqcGdeQXVyNjExMjE5OTM@._V1_.jpg'),
(5, 'Madras Cafe', 'Hindi', 'Drama', '75%', '2020-05-15', 'https://upload.wikimedia.org/wikipedia/en/thumb/e/ec/Madras_Cafe_Poster.jpg/220px-Madras_Cafe_Poster.jpg'),
(6, 'URI The Surgical Strike', 'Hindi', 'Drama,Thriller', '64%', '2020-04-20', 'https://upload.wikimedia.org/wikipedia/en/thumb/3/3b/URI_-_New_poster.jpg/220px-URI_-_New_poster.jpg'),
(7, 'The Sky Is Pink', 'Hindi', 'Drama', '70%', '2020-06-12', 'https://upload.wikimedia.org/wikipedia/en/thumb/9/93/The_Sky_Is_Pink.jpg/220px-The_Sky_Is_Pink.jpg'),
(8, 'Saaho', 'Telugu', 'Action', '99%', '2020-08-10', 'https://upload.wikimedia.org/wikipedia/en/6/6b/Saaho_poster.jpg'),
(9, 'Robo 2.0', 'Telugu', 'Action', '75%', '2020-03-01', 'https://upload.wikimedia.org/wikipedia/en/thumb/c/cf/2.0_film_poster.jpg/220px-2.0_film_poster.jpg');

-- --------------------------------------------------------

--
-- Table structure for table `theatres`
--

CREATE TABLE `theatres` (
  `id` int(100) NOT NULL,
  `name` varchar(50) DEFAULT NULL,
  `vacancy` tinyint(1) DEFAULT NULL,
  `price` int(100) DEFAULT NULL,
  `reservedSeats` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `theatres`
--

INSERT INTO `theatres` (`id`, `name`, `vacancy`, `price`, `reservedSeats`) VALUES
(1, 'Carnival:ameerpet', 1, 150, '[\"A1\",\"A2\",\"A3\",\"A4\",\"A5\",\"J10\",\"J9\",\"J8\",\"J7\"]'),
(2, 'PVR:Preston Prime,Gachibowli,Hyderabad', 1, 170, '[\"A1\",\"A2\",\"A3\",\"A4\"]'),
(3, 'Asian M cube Mall:Attapur', 1, 130, NULL),
(4, 'SPI:S2 Mallapur, Secunderabad', 1, 170, NULL),
(5, 'Cinepolis:CCPL Mall, Hyedrabad', 1, 150, '[\"A1\",\"A2\",\"A3\",\"A4\",\"A5\",\"J1\",\"J2\",\"J3\",\"J4\"]');

-- --------------------------------------------------------

--
-- Table structure for table `tickets_booked`
--

CREATE TABLE `tickets_booked` (
  `booking_id` int(10) UNSIGNED NOT NULL,
  `theatre_id` int(10) DEFAULT NULL,
  `seat_no` varchar(50) DEFAULT NULL,
  `is_reserved` tinyint(1) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `tickets_booked`
--

INSERT INTO `tickets_booked` (`booking_id`, `theatre_id`, `seat_no`, `is_reserved`) VALUES
(2, 3, 'C4', 1),
(3, 3, 'C5', 1),
(4, 3, 'C4', 1),
(5, 3, 'C5', 1);

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `username` varchar(50) DEFAULT NULL,
  `email` varchar(50) NOT NULL,
  `password` varchar(50) DEFAULT NULL,
  `token` varchar(50) DEFAULT NULL,
  `role` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`username`, `email`, `password`, `token`, `role`) VALUES
('gan', 'gan@gmail.com', 'gan', NULL, 'vendor'),
('jay', 'jay@gmail.com', 'jay', NULL, 'admin'),
('rey', 'rey@gmail.com', 'rey', NULL, 'user'),
('shabeer', 'shabeer@gmail.com', 'shabeer', '1574772715882', 'vendor');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `movies`
--
ALTER TABLE `movies`
  ADD PRIMARY KEY (`movie_id`);

--
-- Indexes for table `theatres`
--
ALTER TABLE `theatres`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `tickets_booked`
--
ALTER TABLE `tickets_booked`
  ADD PRIMARY KEY (`booking_id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`email`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `movies`
--
ALTER TABLE `movies`
  MODIFY `movie_id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT for table `tickets_booked`
--
ALTER TABLE `tickets_booked`
  MODIFY `booking_id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
