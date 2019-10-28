$(function(){
  $('#js-shopping-list-form').submit(function(event) {
    //prevents form submission default behavior
    event.preventDefault();
    const listItem = $('#shopping-list-entry').val();

    //clears input field upon submission
    $('#shopping-list-entry').val('');

    //creates new list entry using the input text, includes check and delete buttons
    $('.shopping-list').append(
      `<li>
        <span class="shopping-item">${listItem}</span>
        <div class="shopping-item-controls">
          <button class="shopping-item-toggle">
            <span class="button-label">check</span>
          </button>
          <button class="shopping-item-delete">
            <span class="button-label">delete</span>
          </button>
        </div>
      </li>`);
    });

    //clicking 'delete' button removes list entry
    $('.shopping-list').on('click', '.shopping-item-delete', function(event) {
      $(this).closest('li').remove();
    });

    //clicking 'check' button toggles strikethrough on item text
    $('.shopping-list').on('click', '.shopping-item-toggle', function(event) {
      $(this).closest('li').find('.shopping-item').toggleClass('shopping-item__checked');
    });
});
