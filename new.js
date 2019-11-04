$('#clickMe').on('click', () =>{
    $('#popover').toggle()
  } )
  
  $('#wrapper').on('click', (sgs) => sgs.stopPropagation())
  
  $(document).on('click', () => $('#popover').hide())
  