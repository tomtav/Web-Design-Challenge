document.addEventListener('DOMContentLoaded', _ => {
    let sideNavOptions = {
        'closeOnClick': true,
    }
    let sidenav = document.querySelectorAll('.sidenav');
    let instanceSideNav = M.Sidenav.init(sidenav, sideNavOptions);

    let collapseOptions = {
        'closeOnClick': true,
    }
    let collapsible = document.querySelectorAll('.collapsible');
    let instanceCollapsible = M.Collapsible.init(collapsible, collapseOptions);

    let dropdownOptions = {
        'constrainWidth': false,
        'coverTrigger': false
    }
    let dropdown = document.querySelectorAll('.dropdown-trigger');
    let instanceDropDown = M.Dropdown.init(dropdown, dropdownOptions);
});
