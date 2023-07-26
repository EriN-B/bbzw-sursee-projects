export function deleteAddress(addresses, id) {
  const filteredAddresses = addresses.filter((address) => address.id !== +id);
  return filteredAddresses;
}