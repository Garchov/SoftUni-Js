function foreignLanguages(country) {
  /* 
        if (country === 'USA') {
            console.log('English');
        } else if (country === 'England') {
            console.log('English');
        } else if (country === 'Spain') {
            console.log('Spanish');
        } else if (country === 'Argentina') {
            console.log('Spanish');
        } else if (country === 'Mexico') {
            console.log('Spanish');
        } else {
            console.log('unknown');
        } */

  switch (country) {
    case "USA":
    case "England":
      console.log("English");
      break;

    case "Spain":
    case "Argentina":
    case "Mexico":
      console.log("Spanish");

      break;

    default:
      console.log("unknown");
  }
}
foreignLanguages("USA");
