/**
 * variable making keywords
 * 
 * ES5:
 * -var (ReDeclare and ReDefine is allowed)
 * ES6:
 * -let (ReDeclare is not allowed but ReDefine is allowed)
 * -const (ReDeclare and ReDefine both are not allowed)
 * 
 * example:
 * var name; //declare
 * name="Reeta Panthee"; //Define
 * 
 * var name; //ReDeclare
 * name="Hary"; //ReDefine
 * 
 * let n=10;
 * let n; // not allowed
 * n=5; //allowed
 * 
 * const y=9; //perfect
 * 
 * const x;
 * x=7; //error, this behaves redefine calling on new line
 * 
 * Standard name of JavaScript is EcmaScript.
 * JavaScript version starts with ES
 * ES1+Initialization
 *  ES2=Documentation
 *  ES3=Data type management
 * ES4=Debugging standard
 * 
 * ES5=Major version of data validation rules
 * ES6=Major version of standard documentation
 * 
 * Updating new version: ES7, Es8...
 */
var n=10;
console.log(n);
var n2=5;
console.log(n+n2);
let form = document.contact_form;
let fullname = document.contact_form.fname;
let email = document.contact_form.email;
console.log(fullname,email);
/**
 * commmon JavaScript event :
 * - mouse event (i.e. onclick, onmouseover)
 * - keyboard event (i.e. onkeyup, onkeydown)
 * - window event (i.e. onload)
 * - form event (i.e. onchange, onfocus, onsubmit)
 * 
 * listen method: element.addEventListener("event", callback());
 * callback() {...}
 */
form.addEventListener("submit", function(event){
    if(fullname.value.length == 0){
        fullname.nextElementSibling.innerText = "Fullname is empty!";
    event.preventDefault(); }
    else{
    fullname.nextElementSibling.innerText = "";    }
});