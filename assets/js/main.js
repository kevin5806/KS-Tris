let b1 = 0, b2 = 0, b3 = 0, b4 = 0, b5 = 0, b6 = 0, b7 = 0, b8 = 0, b9 = 0;
let turn = 0, risposta = false, vx = false, vo = false, pare = false;

function reloadpage () {
    window.location.reload();
}

function tris (box) {
    if (vx == false && vo == false && pare == false) {
        switch (box) {
            case 1: if (b1 != 0) { risposta = false; } else { risposta = true; } break;
            case 2: if (b2 != 0) { risposta = false; } else { risposta = true; } break;
            case 3: if (b3 != 0) { risposta = false; } else { risposta = true; } break;
            case 4: if (b4 != 0) { risposta = false; } else { risposta = true; } break;
            case 5: if (b5 != 0) { risposta = false; } else { risposta = true; } break;
            case 6: if (b6 != 0) { risposta = false; } else { risposta = true; } break;
            case 7: if (b7 != 0) { risposta = false; } else { risposta = true; } break;
            case 8: if (b8 != 0) { risposta = false; } else { risposta = true; } break;
            case 9: if (b9 != 0) { risposta = false; } else { risposta = true; } break;
        }
    

        if (risposta == true) {
            turn++;
            
            document.getElementById("turnCount").innerHTML = "È il turno  " + turn;

            if (turn % 2 == 0) {
                document.getElementById('bo'+box).classList.remove("none");
                switch (box) {
                    case 1: b1 = 2; break;
                    case 2: b2 = 2; break;
                    case 3: b3 = 2; break;
                    case 4: b4 = 2; break;
                    case 5: b5 = 2; break;
                    case 6: b6 = 2; break;
                    case 7: b7 = 2; break;
                    case 8: b8 = 2; break;
                    case 9: b9 = 2; break;
                }
                document.getElementById("message").innerHTML = "È il turno della X";
            
            } else {
                document.getElementById('bx'+box).classList.remove("none");
                switch (box) {
                    case 1: b1 = 1; break;
                    case 2: b2 = 1; break;
                    case 3: b3 = 1; break;
                    case 4: b4 = 1; break;
                    case 5: b5 = 1; break;
                    case 6: b6 = 1; break;
                    case 7: b7 = 1; break;
                    case 8: b8 = 1; break;
                    case 9: b9 = 1; break;
                }
                document.getElementById("message").innerHTML = "È il tuorno della O";
            }   

        } else {
            document.getElementById("message").innerHTML = "Casella Occupata";
        }

        //controllo vincita
            //X
            if (b1 == 1 && b2 == 1 && b3 == 1) {
                vx = true;
                document.getElementById("bx1").src="assets/images/x-bw.png";
                document.getElementById("bx2").src="assets/images/x-bw.png";
                document.getElementById("bx3").src="assets/images/x-bw.png";
            } else if (b4 == 1 && b5 == 1 && b6 == 1) {
                vx = true;
                document.getElementById("bx4").src="assets/images/x-bw.png";
                document.getElementById("bx5").src="assets/images/x-bw.png";
                document.getElementById("bx6").src="assets/images/x-bw.png";
            } else if (b7 == 1 && b8 == 1 && b9 == 1) {
                vx = true;
                document.getElementById("bx7").src="assets/images/x-bw.png";
                document.getElementById("bx8").src="assets/images/x-bw.png";
                document.getElementById("bx9").src="assets/images/x-bw.png";
            } else if (b1 == 1 && b4 == 1 && b7 == 1) {
                vx = true;
                document.getElementById("bx1").src="assets/images/x-bw.png";
                document.getElementById("bx4").src="assets/images/x-bw.png";
                document.getElementById("bx7").src="assets/images/x-bw.png";
            } else if (b2 == 1 && b5 == 1 && b8 == 1) {
                vx = true;
                document.getElementById("bx2").src="assets/images/x-bw.png";
                document.getElementById("bx5").src="assets/images/x-bw.png";
                document.getElementById("bx8").src="assets/images/x-bw.png";
            } else if (b3 == 1 && b6 == 1 && b9 == 1) {
                vx = true;
                document.getElementById("bx3").src="assets/images/x-bw.png";
                document.getElementById("bx6").src="assets/images/x-bw.png";
                document.getElementById("bx9").src="assets/images/x-bw.png";
            } else if (b1 == 1 && b5 == 1 && b9 == 1) {
                vx = true;
                document.getElementById("bx1").src="assets/images/x-bw.png";
                document.getElementById("bx5").src="assets/images/x-bw.png";
                document.getElementById("bx9").src="assets/images/x-bw.png";
            } else if (b3 == 1 && b5 == 1 && b7 == 1) {
                vx = true;
                document.getElementById("bx3").src="assets/images/x-bw.png";
                document.getElementById("bx5").src="assets/images/x-bw.png";
                document.getElementById("bx7").src="assets/images/x-bw.png";
            } else {
                if (turn == 9) {
                    pare = true;
                } else {
                    if (b1 == 2 && b2 == 2 && b3 == 2) {
                        vo = true;
                        document.getElementById("bo1").src="assets/images/o-bw.png";
                        document.getElementById("bo2").src="assets/images/o-bw.png";
                        document.getElementById("bo3").src="assets/images/o-bw.png";
                    } else if (b4 == 2 && b5 == 2 && b6 == 2) {
                        vo = true;
                        document.getElementById("bo4").src="assets/images/o-bw.png";
                        document.getElementById("bo5").src="assets/images/o-bw.png";
                        document.getElementById("bo6").src="assets/images/o-bw.png";
                    } else if (b7 == 2 && b8 == 2 && b9 == 2) {
                        vo = true;
                        document.getElementById("bo7").src="assets/images/o-bw.png";
                        document.getElementById("bo8").src="assets/images/o-bw.png";
                        document.getElementById("bo9").src="assets/images/o-bw.png";
                    } else if (b1 == 2 && b4 == 2 && b7 == 2) {
                        vo = true;
                        document.getElementById("bo1").src="assets/images/o-bw.png";
                        document.getElementById("bo4").src="assets/images/o-bw.png";
                        document.getElementById("bo7").src="assets/images/o-bw.png";
                    } else if (b2 == 2 && b5 == 2 && b8 == 2) {
                        vo = true;
                        document.getElementById("bo2").src="assets/images/o-bw.png";
                        document.getElementById("bo5").src="assets/images/o-bw.png";
                        document.getElementById("bo8").src="assets/images/o-bw.png";
                    } else if (b3 == 2 && b6 == 2 && b9 == 2) {
                        vo = true;
                        document.getElementById("bo3").src="assets/images/o-bw.png";
                        document.getElementById("bo6").src="assets/images/o-bw.png";
                        document.getElementById("bo9").src="assets/images/o-bw.png";
                    } else if (b1 == 2 && b5 == 2 && b9 == 2) {
                        vo = true;
                        document.getElementById("bo1").src="assets/images/o-bw.png";
                        document.getElementById("bo5").src="assets/images/o-bw.png";
                        document.getElementById("bo9").src="assets/images/o-bw.png";
                    } else if (b3 == 2 && b5 == 2 && b7 == 2) {
                        vo = true;
                        document.getElementById("bo3").src="assets/images/o-bw.png";
                        document.getElementById("bo5").src="assets/images/o-bw.png";
                        document.getElementById("bo7").src="assets/images/o-bw.png";
                    }
            }
        }

        //azioni vincita
        if (vx == true) {
            document.getElementById("turnCount").innerHTML = "Vincitore X";
            document.getElementById("message").classList.add("none");
            document.getElementById("reloadBtn").classList.remove("none");
        } else if (pare == true) {
            document.getElementById("turnCount").innerHTML = "Pareggio";
            document.getElementById("message").classList.add("none");
            document.getElementById("reloadBtn").classList.remove("none"); 
        } else if (vo == true) {
            document.getElementById("turnCount").innerHTML = "Vincitore O";
            document.getElementById("message").classList.add("none");
            document.getElementById("reloadBtn").classList.remove("none");
        }
    }
}