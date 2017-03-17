export const manufactionApi = {
  // GET
  manufactionUrl: () => '/api/manufactions',
  // POST
  addManufactionUrl: () => '/api/manufactions',
  // PUT
  updateManufactionUrl: id => '/api/manufactions/' + id,
  // DELETE
  deleteManufactionUrl: id => '/api/manufactions/' + id,
  // GET
  getSingleManufactionUrl: id => '/api/manufactions/' + id,
  // PUT
  handleManufactionStartUrl: id => '/api/manufactions/handleStart/' + id,
  // PUT
  handleManufactionConfirmUrl: id => '/api/manufactions//handleConfirm/' + id
}
