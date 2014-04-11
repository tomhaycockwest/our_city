<?php include 'header.php' ?>
    <body>
        <div class="container">
            <div id="logo-container-mobile">
                <div id="logo-mobile">
                    <img src="img/logo-mobile.png">
                </div>
            </div>
            <div id="nav-mobile">
                <div class="container">
                    <li class="filter-mobile">
                        <a href="#"></a><img src="img/filter-not-selected.png"></a>
                    </li>
                    <li class="camera-mobile">
                        <img src="img/photo-not-selected.png">
                    </li>
                    <li class="audio-mobile">
                        <img src="img/sound-not-selected.png">
                    </li>
                    <li class="quote-mobile">
                        <img src="img/quote-not-selected.png">
                    </li>
                    <li class="video-mobile">
                        <img src="img/video-not-selected.png">
                    </li>
                </div>
            </div>
        </div>

        <div class="filter-menu-mobile">
            <div class="left">
                <ul>
                    <li><a href="#">historical</a></li>
                    <li><a href="#">nature</a></li>
                    <li><a href="#">art</a></li>
                </ul>
            </div>
            <div class="left">
                <ul>
                    <li><a href="#">culture</a></li>
                    <li><a href="#">music</a></li>
                    <li><a href="#">shopping</a></li>
                </ul>
            </div>
            <div class="left">
                <ul>
                   <li><a href="#">food &amp; drink</a></li>
                   <li><a href="#">hidden gems</a></li>
                   <li class="selected"><a href="#">my london</a></li>
                </ul>
            </div>
        </div>

        <div id="footer-mobile">
            <div class="container">
                <a id="login" href="#">Login /</a><a id="join" href="#"> Join</a>
                <br></br>
                <div id="login-form-mobile">
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
                <div id="join-form-mobile">
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
            </div>
        </div>

        <div class="photo-upload-mobile"></div>
        <div class="audio-upload-mobile"></div>
        <div class="quote-upload-mobile"></div>
        <div class="video-upload-mobile"></div>

        <div id="map-canvas"></div>

        <?php include 'footer.php' ?>
    </body>
</html>