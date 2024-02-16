function gethours() {
    
    const date = new date ();
    const hour = date.gethours();

    if (hour >= 6 && hour <12) {
    return console.log('Bom Dia')
    }
    else if (hour >= 12 && hour <= 18) {
    return console.log('Boa Tarde')
    }
    else {
    return console.log ('Boa Noite')
    }
}
gethours();