console.log("Використання: triangle(v1, t1, v2, t2");
console.log("Типи:");
console.log("'leg' - катет");
console.log("'hypotenuse' - гіпотенуза");
console.log("'adjacent angle' - прилеглий до катета кут");
console.log("'opposite angle' - протилежний до катета кут");
consolw.log("'agle' - гострий кут (коли задана гіпотенуза)");

function triangle(v1, t1, v2, t2);

  if (v1 <= 0 || v2 <= 0) {
      console.log("значення повинні бути додатні");
      return "failed";
  }

  const toRad = deg => deg * Math.PI / 180; 
  const toDeg = rad => rad * 180 / Math.PI;

  let a = 0; 
  let b = 0; 
  let c = 0;    // сторрони трикутника    
  let alpha = 0; 
  let beta = 0;   // гострі кути

    
  if (t1 === "leg" && t2 === "leg") {
        a = v1;
        b = v2;
        c = Math.sqrt(a * a + b * b);
        alpha = toDeg(Math.atan(a / b));
        beta = 90 - alpha;
    }


  else if (
        (t1 === "leg" && t2 === "hypotenuse") || (t2 === "leg" && t1 === "hypotenuse")
    ) {
       // шукаємо катет
      if (t1 === "leg") {
        a = v1;
      } else { 
        a = v1;
      }

      // шукаємо гіпотенузу

      if (t1 === "hypotenuse") {
        c = v1;
      } else {
        c = v2;
      }

        if (a >= c) {
            console.log("катет не може бути більшим або рівним гіпотенузі");
            return "failed";
        }

        b = Math.sqrt(c * c - a * a);
        alpha = toDeg(Math.asin(a / c));
        beta = 90 - alpha;
    }


  else if ((t1 === "hypotenuse" && t2 === "angle") || (t1 === "angle" && t2 === "hypotenuse")) {

        // шукаємо гіпотенузу
        if (t1 === "hypotenuse") {
            c = v1;
        } else {
            c = v2;
        }

        // шукаємо гострий кут
        if (t1 === "angle") {
            alpha = v1;
        } else {
            alpha = v2;
        }

        // перевірка гострого кута
        if (alpha >= 90) {
            console.log("кут повинен бути гострим");
            return "failed";
        }

        a = c * Math.sin(toRad(alpha));
        b = c * Math.cos(toRad(alpha));
        beta = 90 - alpha;
 else {
        console.log("ця комбінація типів не підтримується");
        return "failed";
    }

    console.log("a =", a.toFixed(2));
    console.log("b =", b.toFixed(2));
    console.log("c =", c.toFixed(2));
    console.log("alpha =", alpha.toFixed(2));
    console.log("beta =", beta.toFixed(2));

    return "success"; 
    }
