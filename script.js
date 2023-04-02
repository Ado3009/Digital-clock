function main() {
  const options = {
    hour12: true,
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
  };
  const time = new Date().toLocaleTimeString([], options);
  document.querySelector('.display').textContent = time;
  setTimeout(main, 1000);
}

main();
