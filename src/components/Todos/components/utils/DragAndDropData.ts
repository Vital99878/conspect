type DAndDropData = {
  draggableIndex: number
  targetIndex: number
  pos: 'before' | 'after' | ''
}
const initialData: DAndDropData = {
  draggableIndex: -1,
  targetIndex: -1,
  pos: '',
}

export default class DragAndDropData {
  private static instance = initialData

  static getInstance(): DAndDropData {
    return DragAndDropData.instance
  }

  static clearInstance(): DAndDropData {
    return (DragAndDropData.instance = initialData)
  }

  static setDraggableIndex(index: number) {
    this.instance.draggableIndex = index
  }

  static setTargetIndex(index: number) {
    this.instance.targetIndex = index
  }

  static setPos(pos: DAndDropData['pos']) {
    this.instance.pos = pos
  }

  // eslint-disable-next-line @typescript-eslint/no-empty-function
  private constructor() {}
}
