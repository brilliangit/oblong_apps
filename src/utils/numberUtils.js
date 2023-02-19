console.log((2500).toLocaleString('en-US', {
  style: 'currency',
  currency: 'USD',
}));

export const formatIDRCurrency = (nominal: number) : string => {
  return nominal.toLocaleString('in-ID')
}