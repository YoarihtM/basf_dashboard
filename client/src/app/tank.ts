/* INTERFACE
  In this file we decalare the general structure of the Tank interface
  These are the arguments that have to be extracted form SAP.
  With the exception of:
  
  status?: string;
  */

export interface Tank {
    id?: string;
    matDescription: string;
    batchNo: string;
    client: string;
    startDate: string;
    deliveryDate: string;
    etapaActual: string;
    status?: string;
  }