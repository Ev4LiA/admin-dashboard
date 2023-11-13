export class BookExchangeOrderModel {
  uuid: string;
  title: string;
  author: string;
  orderId: string;
  condition: string;
  status: string;
  imageUrl: string[];
  videoUrl: string;
  // Evaluating
  approximatePrice: number;
  evaluate: number;
  isEvaluating: boolean;
  comment: string;
  createdAt: Date;
  updatedAt: Date;
}
