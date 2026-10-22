var count = 0;
document.getElementById('btn').addEventListener('click', function () {
  count++;
  document.getElementById('n').textContent = count;
});
