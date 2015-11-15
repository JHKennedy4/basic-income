// for 2013
// numbers from: http://www.gpo.gov/fdsys/pkg/BUDGET-2016-DB/xls/BUDGET-2016-DB-3.xls
var revenues = [
  // FOASI, Transfers from General Fund (FICA Taxes)
  // FOASI, Transfers from General Fund (SECA Taxes)
  { key: "Cumulative Return",
  values: [
  { label: 'social_security', value: 545045000000 + 32598000000 },

  // FHI Trust Fund, Transfers from General Fund (FICA Taxes)
  // FHI Trust Fund, Transfers from General Fund (SECA Taxes)
  // FDI, Transfers from General Fund (FICA Taxes)
  // FDI, Transfers from General Fund (SECA Taxes)
  { label: 'medicare', value: 192707000000 + 16016000000 + 92540000000 + 5534000000 },

  // Unemployment Trust Fund, State Accounts, Deposits by States
  // General Taxes, FUTA, Unemployment Trust Fund
  // Taxes, Rail Industry Pension Fund
  { label: 'unemployment', value: 48952000000 + 7748000000 + 2822000000 }]
}
]
