/**
 * fadeOut
 * 
 * @author LangSyne
 */


// animation
// - during
// - step
// - animationStrategy
//
// setTimeout(function, time)
// setInterval(function, time)

function fadeOut( element ) {
    var DURING = 500;
    var STEP = 20;
    var gapTime = DURING / STEP;

    var currentStep = 0;

    

    function doStep() {
        currentStep++;
        if (currentStep == STEP) {
            element.style.opacity = 1 - currentStep / STEP;
            return;
        }

        element.style.opacity = 1 - currentStep / STEP;
        setTimeout( doStep, gapTime );
    }

    doStep();

    function animationStrategy(current, total) {
        return current / total;
    }
}




