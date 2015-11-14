import _ from 'underscore'

export const single_filer = [
  {
    base: 0,
    rate: 0.10
  },
  {
    base: 9225,
    rate: 0.15
  },
  {
    base: 37450,
    rate: 0.25
  },
  {
    base: 90750,
    rate: 0.28
  },
  {
    base: 189300,
    rate: 0.33
  },
  {
    base: 411500,
    rate: 0.35
  },
  {
    base: 413200,
    rate: 0.396
  }
]

const median_income = 43585

export function individualTaxObligation (income = median_income, tax_schedule = single_filer) {
  var obligation = _.reduceRight(tax_schedule, function (total, tax) {
    const taxable_income = income - tax.base

    if (taxable_income > 0) {
      income = income - taxable_income
      return taxable_income * tax.rate + total
    } else {
      return total
    }
  }, 0)

  return obligation
}

export function taxUsageBreakdown (obligation) {
  return {}
}
