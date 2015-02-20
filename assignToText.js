<SCRIPT>
//assigns value to variable
test ="What is all this?"

// opens document and uses methods to modify text characteristics
document.open()
document.write(test.bold()+"<P>")
document.write(test.fontsize(7)+"<P>")
document.write(test.fontcolor("red")+"<P>")
document.write(test.toUpperCase()+"<P>")

//assigns multiple characteristics to text
document.write(test.italics().fontsize(6).fontcolor("green")+"<P>")
document.open()
</SCRIPT>
