USE [tanques]
GO
/****** Object:  Table [dbo].[tanks]    Script Date: 04/01/2022 11:05:22 a. m. ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[tanks](
	[matDescription] [varchar](50) NOT NULL,
	[batchNo] [varchar](20) NOT NULL,
	[startDate] [varchar](30) NOT NULL,
	[deliveryDate] [varchar](30) NOT NULL,
	[client] [varchar](30) NOT NULL,
	[etapaActual] [varchar](30) NOT NULL,
	[id] [varchar](10) NOT NULL,
 CONSTRAINT [PK_tanks] PRIMARY KEY CLUSTERED 
(
	[batchNo] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
