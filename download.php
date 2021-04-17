<?php

$file = 'temp.png';
$postBody = file_get_contents("php://input");
file_put_contents($file, base64_decode($postBody));
echo "Image is loaded in file $file";
