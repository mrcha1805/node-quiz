
const getTax = (req, res) => {
  const netIncome = req.params.netincome;
  let rate = 0;

  if (netIncome >= 150001 && netIncome <= 300000) {
    rate = netIncome * 0.05;
  } else if (netIncome >= 300001 && netIncome <= 500000) {
    rate = ((netIncome - 300000) * 0.10) + 7500;
  } else if (netIncome >= 500001 && netIncome <= 750000) {
    rate = ((netIncome - 500000) * 0.15) + 27500;
  } else if (netIncome >= 750001 && netIncome <= 1000000) {
    rate = ((netIncome - 750000) * 0.20) + 65000;
  } else if (netIncome >= 1000001 && netIncome <= 2000000) {
    rate = ((netIncome - 1000000) * 0.25) + 115000;
  } else if (netIncome >= 2000001 && netIncome <= 5000000) {
    rate = ((netIncome - 2000000) * 0.30) + 365000;
  } else if (netIncome > 5000000) {
    rate = ((netIncome - 5000000) * 0.35) + 1265000;
  }

  res.status(200).send({
    netIncome: netIncome,
    tax: rate
  });
};

module.exports = { getTax }