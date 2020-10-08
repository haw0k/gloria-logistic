export interface ICarouselProps {
  slideActive: number
  images: Array<Object>
  isOpen: boolean
  onClose: () => void
}