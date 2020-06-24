<!DOCTYPE html>
<html lang="nl">

<head>
    <title>UOV</title>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <meta name="robots" content="noindex, nofollow" />
   
    <!--font awesome stylesheet(icoontjes)-->
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.1/css/all.css" integrity="sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf" crossorigin="anonymous">

    <!-- Custom styles for this template -->

    <link href="css/bootstrap.css" rel="stylesheet">
    <link href="css/style.css" rel="stylesheet">


    <style>
        
        


    </style>
</head>

<body id="body">
<!--Nav in open staat-->
    <div id="myNav" class="overlay">
        <div class="container">
            <div class="row">
                <div class="navbox" id="reizen">
                    <div class="navimg"><img src="img/reizen.svg" alt="" title=""></div>
                    <ul>
                        <li onclick="openSubMenu('reizen','reis')"><a href="#">Reizen <i id="reis" class="fas fa-plus"></i></a></li>
                        <li><a href="#">Alles over reizen</a></li>
                        <li><a href="#">Reisplanner</a></li>
                        <li><a href="#">Omleidingen en verstoringen</a></li>
                        <li><a href="#">Lijnennetkaart en Plattegronden</a></li>
                        <li><a href="#">Bezoek Utrecht en omstreken</a></li>
                        <li><a href="#">Toegankelijkheid</a></li>
                        <li><a href="#">Belbus</a></li>
                    </ul>
                </div>
                <div class="navbox" id="abbo" >
                    <div class="navimg"><img src="img/webshop.svg" alt="" title=""></div>
                    <ul>
                        <li onclick="openSubMenu('abbo','abbos')"><a href="#">Abbonementen & kaartjes <i class="fas fa-plus" id="abbos"></i></a></li>
                        <li><a href="#">Alles over abonnementen & kaartjes</a></li>
                        <li><a href="#">Abonnementen</a></li>
                        <li><a href="#">Losse kaartjes</a></li>
                        <li><a href="#">OV-chipkaart</a></li>
                        <li><a href="#">Keuzehulp</a></li>
                        <li><a href="#">Gratis mee</a></li>
                        <li><a href="#">Groepsvervoer</a></li>
                    </ul>
                </div>
                    <div class="navbox" id="senc" >
                    <div class="navimg">
                        <img src="img/klantenservice.svg" alt="" title="">
                        </div>
                    <ul>
                        <li onclick="openSubMenu('senc','sc')"><a href="#">Service & contact <i class="fas fa-plus" id="sc"></i></a></li>
                        <li><a href="#">Alles over service & contact</a></li>
                        <li><a href="#">Contact</a></li>
                        <li><a href="#">Huisregels</a></li>
                        <li><a href="#">Veelgestelde vragen</a></li>
                        <li><a href="#">In- en uitchecken</a></li>
                        <li><a href="#">Reizigersprotocol</a></li>
                        <li><a href="#">U-OV Drempelvrij</a></li>
                    </ul>
                </div>
                <div class="navbox" id="uov">
                    <div class="navimg">
                        <img src="img/qbuzz-actueel.svg" alt="" title="">
                        </div>
                    <ul>
                        <li onclick="openSubMenu('uov','muov')"><a href="#">Meer U-OV<i id="muov" class="fas fa-plus"></i></a></li>
                        <li><a href="#">Meer over U-OV</a></li>
                        <li><a href="#">Nieuws</a></li>
                        <li><a href="#">Acties & campagnes</a></li>
                        <li><a href="#">Over U-OV</a></li>
                        <li><a href="#">Pers</a></li>
                        <li><a href="#">Sponsoring</a></li>
                        <li><a href="#">Vacatures</a></li>
                    </ul>
                </div>
                <div class="navbox navbtn" id="">
                    <div class="navimg">
                        <img src="img/zakelijk.svg" alt="" title="">
                        </div>
                    <ul>
                        <li>
                    <a href="" class="btn btn-warning ">U-OV Zakelijk</a>
                    </li><li>
                        <a href="" class="btn btn-warning">Over Qbuzz</a>
                    </li><li>
                        <a href="" class="btn btn-warning">English</a>
                </li>   
                </ul>
                </div>
            </div>
        </div>
    </div>
<!--Einde Nav in open staat-->    
    
<!--Menu balk -->
    <header>
        <div class="container">
            <div class="row">
                <div class="col-12 headera">
                    <a class="header_logo">
                        <img src="img/logo-uov.svg" alt="Utrecht (U-OV)" title="Utrecht (U-OV)">
                    </a>
                    <a class="header_logo" onclick="openNav()">
                        <i id="menuToggle" class="fas fa-bars"></i><span>Menu</span>
                    </a>
                    <div class="right">
                        <a class="header_logo" href="#popup1">
                            <i class="far fa-user"></i>mijn U-OV
                        </a>
                    </div>
                    <div class="right zoeken">
                        <a class="header_logo" onclick="zoeken()">
                            <i class="fas fa-search"></i>
                            <input type="text" name="search" id="zoeken" placeholder=" zoeken">
                        </a>
                    </div>


                </div>
            </div>
        </div>
    </header>
<!--Einde menu balk    -->
<!-- Login POP up-->
    <div id="popup1" class="POPoverlay">
	<div class="popup">
		<h2><img src="img/uov-zwart.png" alt="" title=""></h2>
		<a class="close" href="#">&times;</a>
        <div class="tab">
        <a id="logina" class="active" onclick="openForm('login')">Login </a> 
        <a id="registera" onclick="openForm('register')"> Registreren</a>
        
        </div>
		<div id="login" class="login"> 
			 <form><br>
                 <label>Email:</label>
      <input type="email" class="form-control" name="email" placeholder="Email"><br>
                 <label>Wachtwoord:</label>
      <input type="password" class="form-control" name="login" placeholder="Wachtwoord"><br>
      <input type="submit" class="btn btn-warning right" value="Log In">
    </form>
		</div>
        <div id="register" class="register hide">
			 <form><br>
                    <label>Voornaam:</label>
      <input type="text" class="form-control" name="Voornaam" placeholder="Voornaam"><br>
                    <label>Achternaam:</label>
      <input type="text" class="form-control" name="Achternaam" placeholder="Achternaam"><br>
                 
                 <label>Email:</label>
      <input type="email" class="form-control" name="login" placeholder="Email"><br>
                 <label>Wachtwoord:</label>
      <input type="password" class="form-control" name="login" placeholder="Wachtwoord"><br>
      <input type="submit" class="btn btn-warning right" value="Log In">
    </form>
		</div>
	</div>
</div>
<!--Einde login POP up-->
<!--    Broodkruimel pad-->
    <div class="breadcrumb">
        <div class="container">
            <a href="">Home</a> > <a href=""> Meer U-OV </a> > <a href="index.html"> Verhalen</a>
        </div>
    </div>
<!--    Einde Broodkruimel pad-->
    <div class="jumbotron">
        <div class="container">
            <h1>Verhalen</h1>
            <p>voor tijdens het wachten,<br>
                even tussendoor in de rij of tijdens een lange rit.</p>
        </div>
    </div>
    <div class="container content">
        <div class="row">
<!--        Verhalen div -->
            <div class="verhalen col-lg-8 col-md-8 col-sm-12 col-12">
                <!--            header Actueel-->
                <h2>
                    <span class="actueel">&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp</span>
                    &nbsp&nbsp<a> De Verhalen </a>&nbsp&nbsp
                    <span class="actueel">&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp</span> </h2>
                <!--            Einde header Actueel-->

                <!--        Start colummen  -->
<!--                               Veranderd opinie naar de juiste category zelfde geld voor auteur/ periode-->
                <div class="column opinie molovich 2019">
                    <div class="row">
                        <div class="col-4 img">
                            <img src="img/girl.jpg" alt="Mountains" style="width:100%">
                        </div>
                        <div class="content col-8">

                            <span class="category">Opinie</span><span class="datum">28 april 2019</span>


                            <h4 class="titel">Wind tegen</h4>
                            <span class="schrijver">Molovich</span>


                            <p>
                                <span class="vieuws"><i class="far fa-eye"></i> 6.768</span>
                                <span class="reacties"><i class="far fa-comment"></i> 7 reacties</span>
                            </p>
                            <p><br> <a href="wind-tegen.html" class="leesmeer">Lees het hele verhaal</a></p>
                        </div>
                    </div>
                </div>
               <div class="column fictie Ben Hoogeboom 2018">
                    <div class="row">
                        <div class="col-4 img">
                            <img src="img/broodje-kroket.jpg" alt="Mountains" style="width:100%">
                        </div>
                        <div class="content col-8">

                            <span class="category">Fictie</span><span class="datum">8 april 2018</span>


                            <h4 class="titel">Klaar ben je</h4>
                            <span class="schrijver">Ben Hoogeboom</span>


                            <p>
                                <span class="vieuws"><i class="far fa-eye"></i> 16.768</span>
                                <span class="reacties"><i class="far fa-comment"></i> 4 reacties</span>
                            </p>
                            <p><br> <a href="Klaar-ben-je.html" class="leesmeer">Lees het hele verhaal</a></p>
                        </div>
                    </div>
                </div>
               <div class="column non-fictie Oud Zeikwijf 2018">
                    <div class="row">
                        <div class="col-4 img">
                            <img src="img/tumbleweed.jpg" alt="Mountains" style="width:100%">
                        </div>
                        <div class="content col-8">

                            <span class="category">Non-fictie</span><span class="datum">2 december 2018</span>


                            <h4 class="titel">Tumbleweed</h4>
                            <span class="schrijver">Oud Zeikwijf</span>


                            <p>
                                <span class="vieuws"><i class="far fa-eye"></i> 6.768</span>
                                <span class="reacties"><i class="far fa-comment"></i> 7 reacties</span>
                            </p>
                            <p><br> <a href="Tumbleweed.html" class="leesmeer">Lees het hele verhaal</a></p>
                        </div>
                    </div>
                </div>
                <div class="column correspondentie Hugo Luijten 2018">
                    <div class="row">
                        <div class="col-4 img">
                            <img src="img/Brief.jpg" alt="Mountains" style="width:100%">
                        </div>
                        <div class="content col-8">

                            <span class="category">Correspondentie</span><span class="datum">12 november 2018</span>


                            <h4 class="titel">Open brief aan Mathilde Marie Christine Ghislaine gravin d’Udekem d’Acoz, koningin van België, hertogin van Brabant</h4>
                            <span class="schrijver">Hugo Luijten</span>


                            <p>
                                <span class="vieuws"><i class="far fa-eye"></i> 5.450</span>
                                <span class="reacties"><i class="far fa-comment"></i> 25 reacties</span>
                            </p>
                            <p><br> <a href="OpenBrief.html" class="leesmeer">Lees het hele verhaal</a></p>
                        </div>
                    </div>
                </div>
                 <!--         Einde colummen   -->
                
                    <span class="actueel">&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp</span>
                    &nbsp&nbsp
                    <a id="loadMore" class="btn btn-primary btn-lg">Meer verhalen</a>
                    &nbsp&nbsp
                    <span class="actueel">&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp</span> 
               

            </div>
            <!-- Einde verhalen div-->

            <div class="sidebox col-lg-4 col-md-4 col-sm-12 col-12">
<!--            Contact voor groot scherm-->
                <div class="contact">  
                    <h2>Neem contact op</h2>
                    <i class="fa fa-phone"></i> 0900 - 525 2241
                    <p>Openingstijden Klantenservice:<br>
                    maandag t/m vrijdag 8:00 uur tot
                    20:00uur. Voor dit informatienummer
                    betaal je je gebruikelijke belkosten.
                    </p>
                </div> 
<!--            Einde contact voor groot scherm    -->
<!--            Category div voor selecteren-->                
                <div>
                    <a onclick="toggleCategorie('downC', 'toggleC')"><i id="downC" class="fas fa-caret-right"> </i> Categorie</a>
                    <table id="toggleC" class="hide">
                        <tbody class="sort">
                            <tr>
                                <td><input type="radio" id="myCheck" name="myCheck" onclick="filterSelection('opinie')"> Opinie</td>
                            </tr>
                            <tr>
                                <td><input type="radio" id="myCheck" name="myCheck" onclick="filterSelection('fictie')"> Fictie</td>
                            </tr>
                            <tr>
                                <td><input type="radio" id="myCheck" name="myCheck" onclick="filterSelection('non-fictie')"> Non-fictie</td>
                            </tr>
                            <tr>
                                <td><input type="radio" id="myCheck" name="myCheck" onclick="filterSelection('correspondentie')"> Correspondentie</td>
                            </tr>
                            <tr>
                                <td><input type="radio" id="myCheck" name="myCheck" onclick="filterSelection('intervieuw')"> Intervieuw</td>
                            </tr>
                            <tr>
                                <td><input type="radio" id="myCheck" name="myCheck" onclick="filterSelection('kort-nurks')"> Kort nurks</td>
                            </tr>
                            <tr>
                                <td><input type="radio" id="myCheck" name="myCheck" onclick="filterSelection('cartoons')"> Cartoons</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
<!--            Einde category div voor selecteren-->                
<!--            Auther div voor selecteren-->                
                <div>
                    <a id="toggle_menu" onclick="toggleCategorie('downA','toggleA')"><i id="downA" class="fas fa-caret-right"> </i> Auteur</a>
                    <table id="toggleA" class="hide">
                        <tbody class="sort">
                        <tr>
                            <td><input type="radio" id="myCheck" name="myCheck" onclick="filterSelection('molovich')"> Molovich</td>
                        </tr>
                        <tr>
                            <td><input type="radio" id="myCheck" name="myCheck" onclick="filterSelection('Ben Hoogeboom')"> Ben Hoogeboom</td>
                        </tr>
                        <tr>
                            <td><input type="radio" id="myCheck" name="myCheck" onclick="filterSelection('Oud Zeikwijf')"> Oud Zeikwijf</td>
                        </tr>
                        <tr>
                            <td><input type="radio" id="myCheck" name="myCheck" onclick="filterSelection('Hugo Luijten')"> Hugo Luijten</td>
                        </tr>
                        <tr>
                            <td><input type="radio" id="myCheck" name="myCheck" onclick="filterSelection('cartoons')"> Grrrits</td>
                        </tr>
                        <tr>
                            <td><input type="radio" id="myCheck" name="myCheck" onclick="filterSelection('cartoons')"> Tom de Jager</td>
                        </tr>
                        <tr>
                            <td><input type="radio" id="myCheck" name="myCheck" onclick="filterSelection('cartoons')"> De verwarde man</td>
                        </tr>
                        <tr>
                            <td><input type="radio" id="myCheck" name="myCheck" onclick="filterSelection('cartoons')"> Jaap de Paap</td>
                        </tr>
                        <tr>
                            <td><input type="radio" id="myCheck" name="myCheck" onclick="filterSelection('cartoons')"> Wouter van den Berg</td>
                        </tr><tr>
                            <td><input type="radio" id="myCheck" name="myCheck" onclick="filterSelection('cartoons')"> Kittekat</td>
                        </tr>
                        
                        <tr>
                            <td><input type="radio" id="myCheck" name="myCheck" onclick="filterSelection('cartoons')"> Berend Quest</td>
                        </tr>
                        <tr>
                            <td><input type="radio" id="myCheck" name="myCheck" onclick="filterSelection('cartoons')"> Vrouwke van Stavast</td>
                        </tr>
                        <tr>
                            <td><input type="radio" id="myCheck" name="myCheck" onclick="filterSelection('cartoons')"> Rico Suave</td>
                        </tr>
                        </tbody>
                    </table>
                </div>
<!--            Einde auther div voor selecteren-->                
<!--            Periode div voor selecteren-->
                <div>
                    <a id="toggle_menu" onclick="toggleCategorie('downP','toggleP')"><i id="downP" class="fas fa-caret-right"> </i> Periode</a>
                    <table id="toggleP" class="hide">
                        <tbody class="sort">
                        <tr>
                            <td><input type="radio" id="myCheck" name="myCheck" onclick="filterSelection('2020')"> 2020</td>
                        </tr>
                        <tr>
                            <td><input type="radio" id="myCheck" name="myCheck" onclick="filterSelection('2019')"> 2019</td>
                        </tr>
                        <tr>
                            <td><input type="radio" id="myCheck" name="myCheck" onclick="filterSelection('2018')"> 2018</td>
                        </tr>
                        </tbody>
                    </table>
                </div>
<!--            EINDE Periode div voor selecteren-->
                <br>
            </div>
        </div><!--  einde row-->
        <div class="row bg-light">
<!--        Klein contact formulier voor mobiel-->
            <div class="contactSmal">  
                <h4>Neem contact op</h4>
                <i class="fa fa-phone"></i> <b>0900 - 525 2241</b>
                <p>Openingstijden Klantenservice:<br>
                    maandag t/m vrijdag 8:00 uur tot
                    20:00uur. Voor dit informatienummer
                    betaal je je gebruikelijke belkosten.
                </p>
            </div> 
<!--        EINDE Klein contact formulier voor mobiel-->
        </div>
    </div><!--  einde container-->
    <br><br><br><br><br>

    <script src="js/script.js"></script>
    <script>

    </script>
</body>

</html>
