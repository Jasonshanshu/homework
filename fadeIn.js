/**
 * fadeIn
 * 
 * @author LangSyne
 */


function fadeIn( element ) {
    var DURING = 500;
    var STEP = 50;
    var gapTime = DURING / STEP;

    var currentStep = 0;

    

    function doStep() {
        currentStep++;
        if (currentStep == STEP) {
            element.style.marginLeft = animationStrategy(currentStep, STEP) * 500 + 'px';
            return;
        }

        element.style.marginLeft = animationStrategy(currentStep, STEP) * 500 + 'px';
        setTimeout( doStep, gapTime );
    }

    doStep();

    function animationStrategy(currentStep, totalStep) {
        return currentStep / totalStep;
        //return Math.pow( currentStep / totalStep, 2 );
    }
}

