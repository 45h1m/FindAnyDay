function result() 
{       
    var InputDegree = document.getElementById("input").value;
    var CountDegree = 0;
    var Quadrant = 0;

    document.getElementById("display2").innerHTML= "-";

    if (InputDegree > 999999)
    {
        InputDegree= 0;
        var x = 1;
    }

    while (CountDegree<InputDegree && InputDegree != 0) {
            
        for (var i = 0; i<90; i++ ){
            CountDegree++;

            if (CountDegree == InputDegree) {
                break;
            }
        }
        Quadrant++;

            if (Quadrant > 4){
                Quadrant = 1;
            }
    }

    document.getElementById("py").style.backgroundColor = "rgb(187, 185, 185)";
    document.getElementById("nx").style.backgroundColor = "rgb(187, 185, 185)";
    document.getElementById("ny").style.backgroundColor = "rgb(187, 185, 185)";
    document.getElementById("px").style.backgroundColor = "rgb(187, 185, 185)";

    document.getElementById("behindCircle").style.visibility="hidden";
    document.getElementById("behindCircle2").style.visibility="hidden";
    document.getElementById("behindCircle3").style.visibility="hidden";
    document.getElementById("behindCircle4").style.visibility="hidden";

    document.getElementById("display2").style.color="aliceblue";       
    document.getElementById("display").style.color="aliceblue";

    if (InputDegree == 0){
        document.getElementById("px").style.backgroundColor = "rgb(42, 255, 220)";
        document.getElementById("display").innerHTML= "0° lies in +x axis";
        document.getElementById("display2").innerHTML= "it's quadrantal angle..";
    }

    if (CountDegree % 90 == 0){
        switch (Quadrant) {
            case 1 :
                document.getElementById("py").style.backgroundColor = "rgb(42, 255, 220)";
                document.getElementById("display").innerHTML= InputDegree + "° lies in +y axis";
                document.getElementById("display2").innerHTML= "it's quadrantal angle..";
            System.out.println(CountDegree + " Degree lies in (+y) axis");
            break;
            case 2:
                document.getElementById("nx").style.backgroundColor = "rgb(42, 255, 220)";
                document.getElementById("display").innerHTML= InputDegree + "° lies in -x axis";
                document.getElementById("display2").innerHTML= "it's quadrantal angle..";
            System.out.println(CountDegree + " Degree lies in (-x) axis");
            break;
            case 3:
                document.getElementById("ny").style.backgroundColor = "rgb(42, 255, 220)";
                document.getElementById("display").innerHTML= InputDegree + "° lies in -y axis";
                document.getElementById("display2").innerHTML= "it's quadrantal angle..";
            System.out.println(CountDegree + " Degree lies in (-y) axis");
            break;
            case 4:
                document.getElementById("px").style.backgroundColor = "rgb(42, 255, 220)";
                document.getElementById("display").innerHTML= InputDegree + "° lies in +x axis";
                document.getElementById("display2").innerHTML= "it's quadrantal angle..";
            System.out.println(CountDegree + " Degree lies in (+x) axis");                
        }
    }
    else if (InputDegree != 0) {
        switch (Quadrant)
        {
            case 1 :
                document.getElementById("behindCircle3").style.visibility="visible";
                document.getElementById("display").innerHTML= InputDegree + "° lies in 1st quadrant";
                break;
            case 2 :
                document.getElementById("behindCircle2").style.visibility="visible";
                document.getElementById("display").innerHTML= InputDegree + "° lies in 2nd quadrant";
                break;
            case 3 :
                document.getElementById("behindCircle").style.visibility="visible";
                document.getElementById("display").innerHTML= InputDegree + "° lies in 3rd quadrant";
                break;
            case 4 :
                document.getElementById("behindCircle4").style.visibility="visible";
                document.getElementById("display").innerHTML= InputDegree + "° lies in 4th quadrant";
                break;

        }
    }
    if (x == 1){
        document.getElementById("display2").innerHTML= "!";       
        document.getElementById("display2").style.color="red";       
        document.getElementById("display").style.color="red";       
        document.getElementById("display").innerHTML= "Please enter (0-999999)°";
    }
}