import test from 'tape'
import * as tax from '../app/tax-calculator'

test('tax obligation', (assert) => {
  const input = 30000
  const output = 4039

  assert.equals(Math.round(tax.individualTaxObligation(input, tax.single_filer)),
                output,
                'expected tax obligation should match calculated obligation')
  assert.end()
})
