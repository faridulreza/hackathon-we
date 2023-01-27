let startTime = null;
let endTime = null;
let totalCIValue = 0;
let totalCIcnt = 0;

async function pushAttentionInterval() {}

async function decide(CI) {
  if (startTime == null) {
    startTime = Date.now();
    totalCIValue = totalCIcnt = 0;
  }
  totalCIValue += CI;
  totalCIcnt++;

  let timePassed = Date.now() - startTime;

  if (timePassed >= 5 * 60 * 1000) {
    endTime = Date.now();
  }
}

export default decide;
