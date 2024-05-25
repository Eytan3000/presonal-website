import { useMobile } from '../../../Contexts/MobileProvider';
import './techGrid.css';

function getDesktopNestedArr(techList: string[]) {
  // this function return a nested array which has arrays of 1, 2, or 3 elements. meaning a maximum of 3 in each row.

  const maxChar3auto = 10; //maximum chars in techName for 3 auto in css
  const maxChar2auto = 21;
  const maxChar1auto = 57;

  const newArr: string[][] = [];

  let i1 = 0;
  let i2 = 0;
  while (i1 < techList.length) {
    newArr.push([]);
    let tempLength = maxChar1auto;

    while (tempLength > 0) {
      const techName = techList[i1];

      if (!techName) break;
      newArr[i2].push(techName);

      if (techName.length <= maxChar3auto)
        tempLength -= Math.ceil(maxChar1auto / 3);
      else if (techName.length <= maxChar2auto)
        tempLength -= Math.ceil(maxChar1auto / 2);
      else if (techName.length <= maxChar1auto) tempLength = 0;
      i1++;
    }
    i2++;
  }
  return newArr;
}

function getMobileNestedArr(techList: string[]) {
  // this function return a nested array which has arrays of 1, or 2 elements. meaning a maximum of 2 in each row.

  const maxChar2auto = 7;
  const maxChar1auto = 30;

  const newArr: string[][] = [];

  let i1 = 0;
  let i2 = 0;
  while (i1 < techList.length) {
    newArr.push([]);
    let tempLength = maxChar1auto;

    while (tempLength > 0) {
      const techName = techList[i1];

      if (!techName) break;
      newArr[i2].push(techName);

      if (techName.length <= maxChar2auto)
        tempLength -= Math.ceil(maxChar1auto / 2);
      else if (techName.length <= maxChar1auto) tempLength = 0;
      i1++;
    }
    i2++;
  }
  return newArr;
}
export function TechGrid({ techList }: { techList: string[] }) {
  const { isMobile } = useMobile();

  // techList.sort((a, b) => a.length - b.length);

  const desktopNestedArr = getDesktopNestedArr(techList);
  const mobileNestedArr = getMobileNestedArr(techList);

  return (
    <>
      {!isMobile && (
        <p style={{ display: 'inline-block', marginBlock: '0 20px' }}>
          Tools and technologies used in this project:
        </p>
      )}
      <div style={{ marginTop: '1.5rem' }}>
        {isMobile
          ? mobileNestedArr.map((nestedArr, index) => (
              <div
                key={index}
                className={`tech-card-container-1${nestedArr.length}`}>
                {nestedArr.map((techName, idx) => (
                  <div key={idx} className="tech-card">
                    {techName}
                  </div>
                ))}
              </div>
            ))
          : desktopNestedArr.map((nestedArr, index) => (
              <div
                key={index}
                className={`tech-card-container-1${nestedArr.length}`}>
                {nestedArr.map((techName, idx) => (
                  <div key={idx} className="tech-card">
                    {techName}
                  </div>
                ))}
              </div>
            ))}
      </div>
    </>
  );
}
