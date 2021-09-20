

document.addEventListener('DOMContentLoaded', () => {
    const overlay = document.querySelector('.overlay');

    fetch('http://109.236.74.74:9900/getdata')
    .then(res => res.json())
    .then(data => {
        if (data.success = 'succses') {
            document.querySelector('.card__succses').classList.add('visible')
        }
        document.querySelector('.card__email span').textContent = data.Garage.Email;
        document.querySelector('.card__name span').textContent = data.Garage.Name;
        document.querySelector('.card__owner span').textContent = data.Garage.Owner;
        document.querySelector('.card__title span').textContent = data.Item.Title;
        document.querySelector('.card__descr div').textContent = data.Item.Description;
        document.querySelector('.card__color span').textContent = data.Item.Original.CarOptions.Title;
        document.querySelector('.card__trim-level span').textContent = data.Item.KeyValues.TrimLevel;
    })


    document.querySelector('.card__edit').addEventListener('click', () => {
        overlay.classList.remove('hide');
    });

    function changeData() {
       let confirmBtn = document.querySelector('.form__confirm');

        confirmBtn.addEventListener('click', () => {
            let email = document.querySelector('.form__email').value;
            let name = document.querySelector('.form__name').value;
            let owner = document.querySelector('.form__owner').value;

            if (email && name && owner) {
                document.querySelector('.card__email span').textContent = email;
                document.querySelector('.card__name span').textContent = name;
                document.querySelector('.card__owner span').textContent = owner;
    
                overlay.classList.add('hide');
            }
        })
    }

    changeData();
    
});