<?php include 'browser.php' ?>
<?php include 'header.php' ?>
    <body>

        <div class="container">
            <div id="header">
                <div id="logo-container">
                    <img id="logo" src="img/logo.png">
                </div>
                <div id="topNav">
                    <ul>
                        <li id="camera">
                            <a href="#"><img src="img/camera-icon.png"></a>
                            <div class="camera-upload">
                                <div class="arrow"></div>
                                <div class="choose-file">Choose File</div>
                                <div class="location">Locate:</div>
                                <div class="caption">Caption:</div>
                                <div class="tag">Tag:</div>
                                <div class="upload">Upload</div>
                            </div>
                        </li>
                        <li id="audio">
                            <a href="#"><img src="img/emotion-icon.png"></a>
                            <div class="audio-upload">
                                <div class="arrow"></div>
                                <div class="arrow"></div>
                                <div class="choose-file">Choose File</div>
                                <div class="location">Locate:</div>
                                <div class="caption">Caption:</div>
                                <div class="tag">Tag:</div>
                                <div class="upload">Upload</div>
                            </div>
                        </li>   
                        <li id="quote">
                            <a href="#"><img src="img/quote-icon.png"></a>
                            <div class="quote-upload">
                                <div class="arrow"></div>
                                <div class="arrow"></div>
                                <div class="choose-file">Choose File</div>
                                <div class="location">Title:</div>
                                <div class="caption">Quote:</div>
                                <div class="tag">Tag:</div>
                                <div class="upload">Post</div>
                            </div>
                        </li>
                    </ul>

                </div>
            </div>
        </div>

    <div id="infobox">
        <div class="info-wrap"></div>
    </div>

    <div id="welcome">
        <p>Introduce yourself to new spaces and places across the city through the memories and tales of Londoners. Choose how you view the map using the three options, and interact with the different pins to explore the city.</p>
    </div>



       


       
        <div id="map-canvas"></div>


        <div id="footer">
            <div id="bottomNav">
                <ul>
                    <li><a id="about" href="#">about</a></li>
                    <li><a id="myldn" href="#">my ldn</a></li>
                    <li><a href="http://blog.ourcityldn.com" target="_blank">blog</a></li>
                    <li><a id="trailer" href="//www.youtube.com/embed/Nv7Ts4v5_Bs?version=3&autohide=1&autoplay=1&rel=0" class="lightbox">trailer</a></li>
                </ul>
            </div>
        </div>

        <div id="about-menu">
            <p>Explore London away from the predictable pathways of the city and immerse yourself in the stories of the people. Mapping memories and significant spaces, Our City LDN is a unique way to interact with places across the city and the rich emotions, behaviours and experiences they hold. Combined to create an interactive map encouraging you to discover new places through images, videos and personal anecdotes from Londoners themselves. Our City LDN is all about offering a unique interactive experience uniting the metropolis and its people.</p>
        </div>

        <div id="myldn-menu">
            <p>Our City LDN is all about uniting the people of the city and mapping individual experience with the places you love most. If you would like to get involved with the project please email <a href="mailto:ourcityldn@gmail.com" target="_top">ourcityldn@gmail.com</a> for the opportunity to share your experiences and what the city means to you.</p>
        </div>

        <div id="join-menu">
            <form role="form">
                <div class="form-group">
                  <label class="form-label" for="InputName">Name</label>
                  <input type="text" class="form-control" id="InputName">
                </div>
                <div class="form-group">
                    <label class="form-label" for="InputEmail">Email address</label>
                    <input type="email" class="form-control" id="InputEmail">
                </div>
                <div class="form-group">
                    <label class="form-label" for="InputPassword">Password</label>
                    <input type="password" class="form-control" id="InputPassword">
                </div>
            </form>
            <div class="checkbox">
                <label class="disclaimer">
                  <input type="checkbox"> I agree that all content I upload is appropriate for the website. I will not upload content that may be deemed at violent, racially offensive, or of a sexual nature.
                </label>
              </div>

            <button type="submit" class="btn btn-default submit">Submit</button>
        </div>

        <div id="login-menu">
            <form role="form">
                <div class="form-group">
                    <label class="form-label" for="InputEmail">Email address</label>
                    <input type="email" class="form-control" id="InputEmail">
                </div>
                <div class="form-group">
                    <label class="form-label" for="InputPassword">Password</label>
                    <input type="password" class="form-control" id="InputPassword">
                </div>

                <button type="submit" class="btn btn-default submit">Login</button>
            </form>
        </div>

        <div id="skyline">
            <img src="img/footer.png">
        </div>
        <?php include 'footer.php' ?>
    </body>
</html>