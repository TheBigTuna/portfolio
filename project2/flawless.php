<!DOCTYPE <!DOCTYPE html>
<html lang="en">
    <head>
        <title></title>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <link href="flawless2.sass" rel="stylesheet">
        <link href="flawless2.css" rel="stylesheet">
        <link href="flawless.js" rel="stylesheet">
        <link href="Reset.css" rel="stylesheet">
    </head>
    <body>
        <div class = "container">
            <div class = "background">
                <img class="model" src = "https://preview.ibb.co/m9rzBm/Website_Design_Background.png">
                </div>
            </div>
            

<?php
if(isset($_POST["ename"])){
$hostname='localhost';
$username='omoore94_omoore';
$password='deandre94';

try {
$dbh = new PDO("mysql:host=$hostname;dbname=omoore94_testdb",$username,$password);

$dbh->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION); // <== add this line
$sql = "INSERT INTO flawless (ename)
VALUES ('".$_POST["ename"]."')";
if ($dbh->query($sql)) {
echo "<script type= 'text/javascript'>alert('Email Recieved Thank You.');</script>";
}
else{
echo "<script type= 'text/javascript'>alert('Sorry the Email was not recieved successfully');</script>";
}

$dbh = null;
}
catch(PDOException $e)
{
echo $e->getMessage('connection error');
}

}

?>

<script>
setTimeout(function() {
    location.assign("index.html")
}, 1200);

</script>

  </body>
</html>

