function fnRecursion(n) {
  if (n < 3) {
    return n;
  }

  return fnRecursion(n - 1) + fnRecursion(n - 2) + fnRecursion(n - 3);
}

function fnIter(n) {
    
  function iter(n, acc) {
    const maxStepesCount = 3;
    const step = 1;

    if (n < maxStepesCount) {
      return n;
    }

    if (acc >= maxStepesCount) {
      return 0;
    }

    const newAcc = acc += step;

    return n - newAcc + iter(n, newAcc);
  }

  return iter(n, 0);
}

module.exports = {
  fnRecursion,
  fnIter,
};