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
           <div class="info-wrap">
            
           </div>
       </div>

       


       
        <div id="map-canvas"></div>


        <div id="footer">
            <div id="bottomNav">
                <ul>
                    <li><a id="about" href="#">about</a></li>
                    <li><a id="myldn" href="#">my ldn</a></li>
                    <li><a href="http://blog.ourcityldn.com" target="_blank">blog</a></li>
                    <li><a href="#">trailer</a></li>
                </ul>
            </div>
        </div>

        <div id="about-menu">
            <p>Our City LDN is a unqiue way to interact with the city, allowing you to upload pictures, video clips, quotes and audio that you come across in london life. Aiming to connect the people of London and those who love the city by allowing you the people to build up a map of what really makes London so special. Explore the diversity and ever growing nature of the city. Whether it’s a family run bakery tucked away in a backstreet of Shoreditch, or the sounds of the underground, share your favourite things about London and discover new ones along the way.</p>
        </div>

        <div id="myldn-menu">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec mattis ipsum nunc, in auctor sem mollis eu. Nam sit amet orci sit amet ipsum scelerisque tristique ut ac leo. Aliquam consequat hendrerit nisi, a rhoncus orci elementum et. Vestibulum in ipsum non nibh pellentesque facilisis dictum ut nisl. Maecenas nec malesuada ligula. Curabitur a aliquam massa. Aenean convallis magna imperdiet, malesuada dolor sit amet, ultrices massa. Integer sit amet odio nisi. Nullam pretium ipsum molestie enim posuere semper.</p>
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