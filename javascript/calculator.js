function getValues() {
    let nums = [];

    nums.push(+document.querySelector("#numberOne").value);
    nums.push(+document.querySelector("#numberTwo").value);

    return nums;
}

function sum() {
    let nums = getValues();

    document.querySelector("#result").value = (nums[0] + nums[1]);
}

function subtraction() {
    let nums = getValues();

    document.querySelector("#result").value = (nums[0] - nums[1]);
}

function multiplication() {
    let nums = getValues();

    document.querySelector("#result").value = (nums[0] * nums[1]);
}

function division() {
    let nums = getValues();

    document.querySelector("#result").value = (nums[0] / nums[1]);
}

function pow() {
    let nums = getValues();

    document.querySelector("#result").value = (Math.pow(nums[0], nums[1]));
}