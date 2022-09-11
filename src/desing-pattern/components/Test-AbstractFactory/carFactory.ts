interface Sedan {
  color: string;
  engine: 'gasoline' | 'diesel';
  createBy: () => void;
}

interface Track {
  color: 'black' | 'white';
  engine: 'diesel';
  createBy: () => void;
}

export interface CarFactory {
  createSedan(): Sedan;
  createTrack(): Track;
}

export class Toyota implements CarFactory {
  createSedan(): Sedan {
    return { color: '', engine: 'gasoline', createBy: () => console.log('Toyota') };
  }

  createTrack(): Track {
    return { color: 'black', engine: 'diesel', createBy: () => console.log('Toyota')};
  }
}

export class Nissan implements CarFactory {
  createSedan(): Sedan {
    return { color: 'black', engine: 'diesel', createBy: () => console.log('Nissan') };
  }

  createTrack(): Track {
    return { color: 'white', engine: 'diesel', createBy: () => console.log('Nissan') };
  }
}
