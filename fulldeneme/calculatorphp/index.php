<!DOCTYPE html>
<html lang="en">
<head>
   <meta charset="UTF-8">
   <meta name="viewport" content="width=device-width, initial-scale=1.0">
   <meta http-equiv="X-UA-Compatible" content="ie=edge">
   <title>Document</title>
</head>
<body>
   <form>
      <input type="text" name="first-number">
      <input type="text" name="second-number">
      <select name="operation">
         <option value="none"></option>
         <option value="add"></option>
         <option value="subtract"></option>
         <option value="multiply"></option>
         <option value="divide"></option>
      </select>
      <button type="submit" name="calculate" value="submit">
   </form>
   <p>The answer is:</p>
   <?php
      if(isset($_GET['submit'])){
         $number1=$_GET['first-number'];
         $number2=$_GET['second-number'];
         $operator=$_GET['opeartor'];
         switch ($operator){
            default:
               echo 'select a method';
               break;
            case 'add':
               echo $number1+$number2;
               break;
            case 'subtract':
               echo $number1-$number2;
               break;
            case 'multiply':
               echo $number1*$number2;
               break;
            case 'divide':
               echo $number1/$number2;
               break;
         }
      }
   ?>
</body>
</html>