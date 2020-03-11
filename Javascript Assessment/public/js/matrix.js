function mapdata() {

  let nodes = [];
  let edges = [];

  // Write your logic here...

  let row = col = 11;

  const createNodes = () => {
    for (let i = 0; i < row; i++) {
      for (let j = 0; j < col; j++) {
        let value = "N" + i + "-" + j;
        let nodeObj = {
          "data": {
            "id": value
          }
        }
        nodes.push(nodeObj);
      }
    }
  }

  const createEdges = () => {
    for (let i = 0; i < row; i++) {
      for (let j = 0; j < col; j++) {

        // vertical edge

        if (i !== 0) {
          let dir = "N" + i + "-" + j + "N",
            src = "N" + i + "-" + j,
            dest = "N" + (i - 1) + "-" + j;

          let northObj = {
            "data": {
              "id": dir,
              "source": src,
              "target": dest
            }
          }

          edges.push(northObj);

          dir = "N" + (i - 1) + "-" + j + "S";
          src = "N" + (i - 1) + "-" + j
          dest = "N" + i + "-" + j;

          let southObj = {
            "data": {
              "id": dir,
              "source": src,
              "target": dest
            }
          }

          edges.push(southObj);

        }

        // horizontal edge

        if (j !== (col - 1)) {
          let dir = "N" + i + "-" + j + "E",
            src = "N" + i + "-" + j,
            dest = "N" + i + "-" + (j + 1);

          let eastObj = {
            "data": {
              "id": dir,
              "source": src,
              "target": dest
            }
          }

          edges.push(eastObj);

          dir = "N" + i + "-" + (j + 1) + "W";
          src = "N" + i + "-" + (j + 1);
          dest = "N" + i + "-" + j;

          let westObj = {
            "data": {
              "id": dir,
              "source": src,
              "target": dest
            }
          }

          edges.push(westObj);
        }

        // diagonals

        if(i!==0 && j!==(col-1)){
          let dir = "N" + i + "-" + j + "NE",
           src = "N" + i + "-" + j,
           dest = "N" + (i - 1) + "-" + (j + 1);

           let northEastObj = {
             "data": {
               "id": dir,
               "source": src,
               "target": dest
             }
           }

           edges.push(northEastObj);

           dir = "N" + (i-1) + "-" + (j+1) + "SW";
           src = "N" + (i-1) + "-" + (j+1);
           dest = "N" + i + "-" + j;

           let southWestObj = {
             "data": {
               "id": dir,
               "source": src,
               "target": dest
             }
           }

           edges.push(southWestObj);
       }

      if(i!==(row-1) && j!==(col-1)){
        let dir = "N" + i + "-" + j + "SE",
        src = "N" + i + "-" + j,
        dest = "N" + (i + 1) + "-" + (j + 1);

        let southEastObj = {
          "data": {
            "id": dir,
            "source": src,
            "target": dest
          }
        }

        edges.push(southEastObj);

        dir = "N" + (i + 1) + "-" + (j + 1) + "NW",
        src = "N" + (i + 1) + "-" + (j + 1),
        dest = "N" + i + "-" + j;

        let northWestObj = {
          "data": {
            "id": dir,
            "source": src,
            "target": dest
          }
        }

        edges.push(northWestObj);
    }

      }
    }
  }

  createNodes();
  createEdges();
  elements = {
    nodes,
    edges
  };

  return elements;

}
module.exports.mapdata = mapdata;


