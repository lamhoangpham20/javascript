
//  Reverse.js (c) Kari Laitinen

//  http://www.naturalprogramming.com

//  2016-11-19 File created.   2017-08-14 Last modification.

var given_numbers = [] ;

process.stdout.write( "\n This program reads numbers from the keyboard."
                   +  "\n After receiving a zero, it prints the numbers"
                   +  "\n in reverse order. Please, start entering numbers."
                   +  "\n The program will stop when you enter a zero.\n\n" ) ;

process.stdout.write( "   "  +  given_numbers.length 
                   +  "  Enter a number: ") ;

process.stdin.on( "data", function( input_from_user )
{
   // This function will be executed always after
   // the user has typed in a number.

   var number_from_keyboard = Number( input_from_user ) ;

   // The push() method adds the number to the end of the array.

   
   if (number_from_keyboard >=1 && number_from_keyboard <= 40)
   {
		given_numbers.push(number_from_keyboard);
   }

   if ( given_numbers.length >= 7 )
   {
      process.stdout.write( "\n Reverse order:  " ) ;

      var number_index = 0 ;

      while ( number_index < given_numbers.length )
      {
         process.stdout.write( given_numbers[ number_index ] + "   " ) ;
		 number_index ++ ;
      }

      process.stdout.write( "\n\n" ) ;

      process.exit() ;  // This terminates the program.
   }
   else
   {
      // We are not finished. Let's ask for one more number.
      // The length property tells how many elements the array has,
      // i.e. how many numbers have been entered.

      process.stdout.write( "   "  +  given_numbers.length 
                         +  "  Enter a number: ") ;
   }
} ) ;
// dcm

