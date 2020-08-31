import React from 'react';
import maura from './Maura.jpg';
import './App.css';
import ReactPlayer from "react-player"

function App() {
  return (
    <>
    <head>
		<title>Escape Velocity by HTML5 UP</title>
		<meta charset="utf-8" />
		<meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no" />
		<link rel="stylesheet" href="assets/css/main.css" />
	</head>
	<body class="homepage is-preload">
		<div id="page-wrapper">

			
				<section id="header" class="wrapper">
						<div id="logo">
							<h1><a href="index.html">Virtual Tutoring</a></h1>
							<p>By Brenden Cyr</p>
						</div>


				</section>

			
				<section id="intro" class="wrapper style1">
					<div class="title">Introduction</div>
					<div class="container">
						<p class="style1">Hi, I'm Brenden! I'm a high school math and science tutor with more than five years of tutoring experience. I have tutored more than 50 different students online and in person, but have moved my business online due to COVID-19 and to expand my tutoring worldwide!</p>
						<p class="style2">
							I tutor all subjects in highschool math (algebra-calculus) as well as physics, chemistry, and SAT prep!
						</p>
					</div>
					<ul class="actions">
						<li><a href="mailto:virtualtutor24@gmail.com" class="button style3 large">Email for booking!</a></li>
					</ul>
				</section>

			
				<section id="main" class="wrapper style2">
					<div class="title">The Online Strategy</div>
					<div class="container">

						
							<a href="index.html" class="image featured">
                <img src={maura} alt="" />
							</a>

						
							<section id="features">
								<header class="style1">
									<h2>Simulate in person learning</h2>
									<p>In my years of tutoring, I have tried several different strategies for virtual learning. These are the strategies that I have found most effective.</p>
								</header>
								<div class="feature-list">
									<div class="row">
										<div class="col-6 col-12-medium">
											<section>
												<h3 class="icon fa-comment">Mobile device video conference</h3>
												<p>For me, the most effective stratgy to simulate an in person tutoring session is to have the student and myself mount our phones in front of our faces. This way we can write our work on a notebook as shown in the above image, which allows us to write and view eachothers work in real time while discussing what we are writing. To make this work I have purchased a $10 "goose neck" phone mount and would recmmend your student do the same.</p>
											</section>
										</div>
										<div class="col-6 col-12-medium">
											<section>
												<h3 class="icon solid fa-sync">Lap top video conference with screen share</h3>
												<p>Another method that I have found to be effective for tutoring when a student is working on problems on their computer is to share their screen with me on a program such as google meet or zoom. The students can verbally walk through their thought processes while we work through an assignment online. </p>
											</section>
										</div>							<a href="index.html"  class="image featured"><ReactPlayer url= "https://www.youtube.com/watch?v=HADMYIr-X6k"/>	</a>				
									</div>
								</div> 
							</section>
              
					</div>
				</section>
				<section id="footer" class="wrapper">
					<div class="title">Contact</div>
					<div class="container">
						<div class="row">
							
							<div class="col-6 col-12-medium">

								
									<section class="feature-list small">
										<div class="row">
											<div class="col-6 col-12-small">
												<section>
													<h3 class="icon solid fa-envelope">Email</h3>
													<p>
														<a href="mailto:virtualtutor24@gmail.com">virtualtutor24@gmail.com</a>
													</p>
												</section>
											</div>
											<div class="col-6 col-12-small">
												<section>
													<h3 class="icon solid fa-phone">Phone</h3>
													<p>
														(413) 949-0124
													</p>
												</section>
											</div>
										</div>
									</section>

							</div>
						</div>
						<div id="copyright">
							<ul>
								<li>&copy; Untitled.</li><li>Design: <a href="http://html5up.net">HTML5 UP</a></li>
							</ul>
						</div>
					</div>
				</section>

		</div>

		
			<script src="assets/js/jquery.min.js"></script>
			<script src="assets/js/jquery.dropotron.min.js"></script>
			<script src="assets/js/browser.min.js"></script>
			<script src="assets/js/breakpoints.min.js"></script>
			<script src="assets/js/util.js"></script>
			<script src="assets/js/main.js"></script>

	</body>
  </>
  );
}

export default App;
