// chap  # 35 to 38 task # 1

function add () {
    document.write("Addition of two numbers :")

    document.write(8+5)
   
   }
  add ();

// chap  # 35 to 38 task # 2

function mul () {
    document.write("<br><br> Multiplication of two numbers :")

    document.write(8*5)
   
   }
  mul ();

// chap  # 35 to 38 task # 3

function sum_sq(array) {
    var sum = 0,
        i = array.length;
    while (i--) {
      sum += Math.pow(array[i], 2);
    }return sum;
  }
  
  document.write("<br><br> The sum of squares : "+sum_sq([0, 1, 2, 3, 4]));
  

  // chap  # 35 to 38 task # 4
  

        function Factorial(n) { 
            var ans=1; 
              
            for (var i = 2; i <= n; i++) 
                ans = ans * i; 
        document.write("<br><br> Factorial of a number is " +ans) 
        } 
          
       Factorial(5);


         // chap  # 35 to 38 task # 5

       function getHypotenuseLength(a, b) {
        if (a && b && Number.isFinite(a) && Number.isFinite(b)) { 
            document.write("<br><br> Hypotenuse : " +Math.sqrt((a * a) + (b * b)))
        }
      
        }

    getHypotenuseLength(5, 12)



// chap  # 35 to 38 task # 6


function count(string) {
    var string1 = string.split("").sort().join("");
    var counter = 0;
    for (var i = 0; i < string.length; i++) {
      if (string1[i] == string[i + 1]) {
        counter++;
      } else {
        document.write("<br> " +string1[i] + " " + counter);
        counter = 0;
      }
    }
  }
  count("thequickbrownfoxjumpsoverthelazydog");