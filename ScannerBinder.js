var keycode = "";
var lastTime = null, nextTime;
var lastCode = null, nextCode;
var nextShift = false;
document.onkeydown = function (e) {
    if (window.event) {
        // IE  
        nextCode = e.keyCode
    } else if (e.which) {
        // Netscape/Firefox/Opera  
        nextCode = e.which
    }
    if (nextCode != 13) {
        nextTime = new Date().getTime();
        if (lastCode == null && lastTime == null || nextTime - lastTime > 60) {
			//16 shift
            if (nextCode == "16")
                nextShift = true;
            else {
                nextShift = false;
                keycode = characterMap[nextCode];
            }
        } else if (lastCode != null && lastTime != null && nextTime - lastTime <= 30) {
            if (nextCode == "16")
                nextShift = true;
            else {
                if (nextShift == true)
                    keycode += characterMapShift[nextCode];
                else
                    keycode += characterMap[nextCode];
                nextShift = false;
            }
        } else {
            keycode = "";
            lastCode = null;
            lastTime = null;
        }
        lastCode = nextCode;
        lastTime = nextTime;
    }
    //13 Enter  
    else if (nextCode == 13 && keycode != "") {
        if (keycode.length > 4)
            console.log(keycode)
        keycode = "";
        lastCode = null;
        lastTime = null;
        nextTime = null;
    }
}
var characterMapShift = [];
characterMapShift[8] = "";
characterMapShift[9] = "";
characterMapShift[13] = "\n";
characterMapShift[16] = "";
characterMapShift[17] = "";
characterMapShift[18] = "";
characterMapShift[19] = "";
characterMapShift[20] = "";
characterMapShift[27] = "";
characterMapShift[32] = " ";
characterMapShift[33] = "";
characterMapShift[34] = "";
characterMapShift[35] = "";
characterMapShift[36] = "";
characterMapShift[37] = "";
characterMapShift[38] = "";
characterMapShift[39] = "";
characterMapShift[40] = "";
characterMapShift[45] = "";
characterMapShift[46] = "";
characterMapShift[48] = ")";
characterMapShift[49] = "!";
characterMapShift[50] = "@";
characterMapShift[51] = "#";
characterMapShift[52] = "$";
characterMapShift[53] = "%";
characterMapShift[54] = "^";
characterMapShift[55] = "&";
characterMapShift[56] = "*";
characterMapShift[57] = "(";
characterMapShift[59] = ":";
characterMapShift[61] = "+";
characterMapShift[65] = "A";
characterMapShift[66] = "B";
characterMapShift[67] = "C";
characterMapShift[68] = "D";
characterMapShift[69] = "E";
characterMapShift[70] = "F";
characterMapShift[71] = "G";
characterMapShift[72] = "H";
characterMapShift[73] = "I";
characterMapShift[74] = "J";
characterMapShift[75] = "K";
characterMapShift[76] = "L";
characterMapShift[77] = "M";
characterMapShift[78] = "N";
characterMapShift[79] = "O";
characterMapShift[80] = "P";
characterMapShift[81] = "Q";
characterMapShift[82] = "R";
characterMapShift[83] = "S";
characterMapShift[84] = "T";
characterMapShift[85] = "U";
characterMapShift[86] = "V";
characterMapShift[87] = "W";
characterMapShift[88] = "X";
characterMapShift[89] = "Y";
characterMapShift[90] = "Z";
characterMapShift[91] = "";
characterMapShift[92] = "";
characterMapShift[93] = "";
characterMapShift[96] = "0";
characterMapShift[97] = "1";
characterMapShift[98] = "2";
characterMapShift[99] = "3";
characterMapShift[100] = "4";
characterMapShift[101] = "5";
characterMapShift[102] = "6";
characterMapShift[103] = "7";
characterMapShift[104] = "8";
characterMapShift[105] = "9";
characterMapShift[106] = "*";
characterMapShift[107] = "+";
characterMapShift[109] = "_";
characterMapShift[107] = "+";
characterMapShift[111] = "/";
characterMapShift[112] = "";
characterMapShift[113] = "";
characterMapShift[114] = "";
characterMapShift[115] = "";
characterMapShift[116] = "";
characterMapShift[117] = "";
characterMapShift[118] = "";
characterMapShift[119] = "";
characterMapShift[120] = "";
characterMapShift[121] = "";
characterMapShift[122] = "";
characterMapShift[123] = "";
characterMapShift[144] = "";
characterMapShift[145] = "";
characterMapShift[186] = ":";
characterMapShift[187] = "+";
characterMapShift[188] = "<";
characterMapShift[189] = "_";
characterMapShift[190] = ">";
characterMapShift[191] = "?";
characterMapShift[192] = "~";
characterMapShift[219] = "{";
characterMapShift[220] = "|";
characterMapShift[221] = "}";
characterMapShift[222] = "\"";

var characterMap = [];
characterMap[8] = "";
characterMap[9] = "";
characterMap[13] = "\n";
characterMap[16] = "";
characterMap[17] = "";
characterMap[18] = "";
characterMap[19] = "";
characterMap[20] = "";
characterMap[27] = "";
characterMap[32] = " ";
characterMap[33] = "";
characterMap[34] = "";
characterMap[35] = "";
characterMap[36] = "";
characterMap[37] = "";
characterMap[38] = "";
characterMap[39] = "";
characterMap[40] = "";
characterMap[45] = "";
characterMap[46] = "";
characterMap[48] = "0";
characterMap[49] = "1";
characterMap[50] = "2";
characterMap[51] = "3";
characterMap[52] = "4";
characterMap[53] = "5";
characterMap[54] = "6";
characterMap[55] = "7";
characterMap[56] = "8";
characterMap[57] = "9";
characterMap[59] = ";";
characterMap[61] = "=";
characterMap[65] = "a";
characterMap[66] = "b";
characterMap[67] = "c";
characterMap[68] = "d";
characterMap[69] = "e";
characterMap[70] = "f";
characterMap[71] = "g";
characterMap[72] = "h";
characterMap[73] = "i";
characterMap[74] = "j";
characterMap[75] = "k";
characterMap[76] = "l";
characterMap[77] = "m";
characterMap[78] = "n";
characterMap[79] = "o";
characterMap[80] = "p";
characterMap[81] = "q";
characterMap[82] = "r";
characterMap[83] = "s";
characterMap[84] = "t";
characterMap[85] = "u";
characterMap[86] = "v";
characterMap[87] = "w";
characterMap[88] = "x";
characterMap[89] = "y";
characterMap[90] = "z";
characterMap[91] = "";
characterMap[92] = "";
characterMap[93] = "";
characterMap[96] = "0";
characterMap[97] = "1";
characterMap[98] = "2";
characterMap[99] = "3";
characterMap[100] = "4";
characterMap[101] = "5";
characterMap[102] = "6";
characterMap[103] = "7";
characterMap[104] = "8";
characterMap[105] = "9";
characterMap[106] = "*";
characterMap[107] = "+";
characterMap[109] = "_";
characterMap[107] = "+";
characterMap[111] = "/";
characterMap[112] = "";
characterMap[113] = "";
characterMap[114] = "";
characterMap[115] = "";
characterMap[116] = "";
characterMap[117] = "";
characterMap[118] = "";
characterMap[119] = "";
characterMap[120] = "";
characterMap[121] = "";
characterMap[122] = "";
characterMap[123] = "";
characterMap[144] = "";
characterMap[145] = "";
characterMap[186] = ";";
characterMap[187] = "=";
characterMap[188] = ",";
characterMap[189] = "-";
characterMap[190] = ".";
characterMap[191] = "/";
characterMap[192] = "`";
characterMap[219] = "[";
characterMap[220] = "\\";
characterMap[221] = "]";
characterMap[222] = "'";
