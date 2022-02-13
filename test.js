function fetch(url) {
  return new Promise((resolve) => {
    setTimeout(() => resolve(`dummy data for ${url}`), Math.random() * 4000);
  });
}

const getAllDesign = async () => {
  let allFetch = [];
  for (let i = 1; i <= 10; i++) {
    // let designFetch = fetch(`/design/${i}`);
    let designFetch = fetchDesign(i);

    allFetch.push(designFetch);
  }

  return await Promise.all(allFetch);
};

const getAvg = (arr) => {
  let ttlColor = arr.reduce(
    (total, num) => {
      return {
        r: total.r + num.color.r,
        g: total.g + num.color.g,
        b: total.b + num.color.b,
      };
    },
    { r: 0, g: 0, b: 0 }
  );

  return {
    r: ttlColor.r / arr.length,
    g: ttlColor.g / arr.length,
    b: ttlColor.b / arr.length,
  };
};

getAllDesign().then((results) => {
  // console.log(results);

  results.forEach((design) => {
    let newShapes = design.shapes;
    let colorAvg = getAvg(newShapes);
    console.log(design.designId, colorAvg);
  });
  console.log("done");
});

function fetchDesign(id) {
  return Promise.resolve({
    designId: id,
    shapes: [
      { shapeId: "basic-square", color: { r: 255, g: 255, b: 255 } },
      { shapeId: "basic-circle", color: { r: 255, g: 255, b: 255 } },
      { shapeId: "basic-diamond", color: { r: 255, g: 0, b: 0 } },
      { shapeId: "basic-rectangle", color: { r: 0, g: 255, b: 0 } },
    ],
  });
}
