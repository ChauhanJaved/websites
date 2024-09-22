//External imports
import cloudinaryLoader from "@/lib/cloudinary-loader";
import { Metadata } from "next";
import { ReactNode } from "react";

export const headerCompanyName: string = "FrameworkTeam";
export const companyName: string = "FrameworkTeam Softwares";
export const email: string = "support@frameworkteam.com";
export const copyrightYear: string = new Date().getFullYear().toString();
export enum HeaderNavItems {
  Home = "home",
  Purchase = "purchase",
  Contact = "contact",
}
export const heroTitle: string =
  "We offer cutting-edge solutions to grow your business";
export const heroDesc: string =
  "We are team of talented professionals creating feature-rich Progressive Web Apps and Windows Desktop Applications.";
export const headerNavItems: string[] = [
  HeaderNavItems.Home,
  HeaderNavItems.Purchase,
  HeaderNavItems.Contact,
];
export const indexMetadata: Metadata = {
  title: `${companyName} - India | Progressive Web Apps | Windows Desktop Applications`,
  description: `${heroTitle}. ${heroDesc}`,
  openGraph: {
    title: `${companyName} - India | Progressive Web Apps | Windows Desktop Applications`,
    description: `${heroTitle}. ${heroDesc}`,
    url: "https://frameworkteam.com",
    siteName: `${companyName} - India`,
    images: [
      {
        url: "https://res.cloudinary.com/dgq2mp4fs/image/upload/v1721890438/frameworkteam/hero-img.png", // Must be an absolute URL
        width: 539,
        height: 438,
        alt: `${companyName} - India`,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
    },
  },
};
export enum Categories {
  All = "all",
  PDF = "pdf",
  TIFF = "tiff",
  JPG = "jpg",
  PNG = "png",
  BMP = "bmp",
  PCX = "pcx",
  HTML = "html",
  Converter = "converter",
  Merger = "merger",
  Combiner = "combiner",
  Splitter = "splitter",
}
export const categoryList: string[] = [
  Categories.All,
  Categories.Converter,
  Categories.PDF,
  Categories.TIFF,
  Categories.Merger,
  Categories.Splitter,
  Categories.Combiner,
  Categories.JPG,
  Categories.PNG,
  Categories.BMP,
  Categories.PCX,
  Categories.HTML,
];

export enum ProductIDs {
  JPGtoPDFConverter = "jpg-to-pdf-converter",
  TIFFtoPDFConverter = "tiff-to-pdf-converter",
  PNGtoPDFConverter = "png-to-pdf-converter",

  PDFtoJPGConverter = "pdf-to-jpg-converter",
  PDFtoTIFFConverter = "pdf-to-tiff-converter",
  PDFtoPNGConverter = "pdf-to-png-converter",
  PDFtoImageConverter = "pdf-to-image-converter",

  TIFFSplitter = "tiff-splitter",
  TIFFCombiner = "tiff-combiner",
  TIFFSplitMerge = "tiff-split-merge",

  PDFSplitter = "pdf-splitter",
  PDFCombiner = "pdf-combiner",
  PDFSplitMerge = "pdf-split-merge",

  WebpageThumbnailer = "webpage-thumbnailer",
  ConvertHTMLtoImage = "convert-html-to-image",
  WebsitesScreenshot = "websites-screenshot",
}

enum ProductTitles {
  JPGtoPDFConverter = "JPG to PDF Converter",
  TIFFtoPDFConverter = "TIFF to PDF Converter",
  PNGtoPDFConverter = "PNG to PDF Converter",

  PDFtoJPGConverter = "PDF to JPG Converter",
  PDFtoTIFFConverter = "PDF to TIFF Converter",
  PDFtoPNGConverter = "PDF to PNG Converter",
  PDFtoImageConverter = "PDF to Image Converter",

  TIFFSplitter = "TIFF Splitter",
  TIFFCombiner = "TIFF Combiner",
  TIFFSplitMerge = "TIFF Split Merge",

  PDFSplitter = "PDF Splitter",
  PDFCombiner = "PDF Combiner",
  PDFSplitMerge = "PDF Split Merge",

  WebpageThumbnailer = "Webpage Thumbnailer",
  ConvertHTMLtoImage = "Convert HTML to Image",
  WebsitesScreenshot = "Websites Screenshot",
}

enum ProductWebsites {
  JPGtoPDFConverter = "https://www.jpg-to-pdf-converter.com/",
  TIFFtoPDFConverter = "https://www.tiff-to-pdf-converter.com/",
  PNGtoPDFConverter = "https://www.png-to-pdf-converter.com/",

  PDFtoJPGConverter = "https://www.pdf-to-jpg-converter.com/",
  PDFtoTIFFConverter = "https://www.pdf-to-tiff-converter.com/",
  PDFtoPNGConverter = "https://www.pdf-to-png-converter.com/",
  PDFtoImageConverter = "https://www.pdf-to-image-converter.com/",

  TIFFSplitter = "https://www.tiff-split-combine.com/tiff-splitter.html",
  TIFFCombiner = "https://www.tiff-split-combine.com/tiff-combiner.html",
  TIFFSplitMerge = "https://www.tiff-split-combine.com/tiff-split-merge.html",

  PDFSplitter = "https://pdf-split-merge.com/pdf-splitter.html",
  PDFCombiner = "https://pdf-split-merge.com/pdf-combiner.html",
  PDFSplitMerge = "https://pdf-split-merge.com/pdf-split-merge.html",

  WebpageThumbnailer = "https://www.webpagethumbnailer.com/",
  ConvertHTMLtoImage = "https://www.converthtmltoimage.com/",
  WebsitesScreenshot = "https://www.websitesscreenshot.com/",
}

enum ProductDownloadLinks {
  JPGtoPDFConverter = "https://jpg-to-pdf-converter.com/downloads/jpg-to-pdf-converter-setup.exe",
  TIFFtoPDFConverter = "https://tiff-to-pdf-converter.com/downloads/tiff-to-pdf-converter-setup.exe",
  PNGtoPDFConverter = "https://png-to-pdf-converter.com/downloads/png-to-pdf-converter-setup.exe",

  PDFtoJPGConverter = "https://pdf-to-jpg-converter.com/downloads/pdf-to-jpg-converter-setup.exe",
  PDFtoTIFFConverter = "https://pdf-to-tiff-converter.com/downloads/pdf-to-tiff-converter-setup.exe",
  PDFtoPNGConverter = "https://pdf-to-png-converter.com/downloads/pdf-to-png-converter-setup.exe",
  PDFtoImageConverter = "https://pdf-to-image-converter.com/downloads/pdf-to-image-converter-setup.exe",

  TIFFSplitter = "https://tiff-split-combine.com/downloads/tiff-splitter-setup.exe",
  TIFFCombiner = "https://tiff-split-combine.com/downloads/tiff-combiner-setup.exe",
  TIFFSplitMerge = "https://tiff-split-combine.com/downloads/tiff-split-merge-setup.exe",

  PDFSplitter = "https://pdf-split-merge.com/downloads/pdf-splitter-setup.exe",
  PDFCombiner = "https://pdf-split-merge.com/downloads/pdf-combiner-setup.exe",
  PDFSplitMerge = "https://pdf-split-merge.com/downloads/pdf-split-merge-setup.exe",

  WebpageThumbnailer = "https://www.webpagethumbnailer.com/media/download/webpagethumbnailer_setup.exe",
  ConvertHTMLtoImage = "https://www.converthtmltoimage.com/media/download/converthtmltoimage_trial.exe",
  WebsitesScreenshot = "https://www.websitesscreenshot.com/media/download/websitesscreenshot_trial.exe",
}

const productImages = {
  JPGtoPDFConverter: {
    imgName: "jpg-to-pdf-converter",
    width: 756,
    height: 463,
  },
  TIFFtoPDFConverter: {
    imgName: "tiff-to-pdf-converter",
    width: 756,
    height: 463,
  },
  PNGtoPDFConverter: {
    imgName: "png-to-pdf-converter",
    width: 756,
    height: 463,
  },

  PDFtoJPGConverter: {
    imgName: "pdf-to-jpg-converter",
    width: 756,
    height: 463,
  },
  PDFtoTIFFConverter: {
    imgName: "pdf-to-tiff-converter",
    width: 739,
    height: 469,
  },
  PDFtoPNGConverter: {
    imgName: "pdf-to-png-converter",
    width: 739,
    height: 469,
  },
  PDFtoImageConverter: {
    imgName: "pdf-to-image-converter",
    width: 739,
    height: 469,
  },

  TIFFSplitter: {
    imgName: "tiff-splitter",
    width: 739,
    height: 469,
  },
  TIFFCombiner: {
    imgName: "tiff-combiner",
    width: 739,
    height: 469,
  },
  TIFFSplitMerge: {
    imgName: "tiff-split-merge",
    width: 739,
    height: 469,
  },

  PDFSplitter: {
    imgName: "pdf-splitter",
    width: 739,
    height: 469,
  },
  PDFCombiner: {
    imgName: "pdf-combiner",
    width: 739,
    height: 469,
  },
  PDFSplitMerge: {
    imgName: "pdf-split-merge",
    width: 739,
    height: 469,
  },

  WebpageThumbnailer: {
    imgName: "webpage-thumbnailer",
    width: 520,
    height: 349,
  },
  ConvertHTMLtoImage: {
    imgName: "convert-html-to-image",
    width: 429,
    height: 271,
  },
  WebsitesScreenshot: {
    imgName: "websites-screenshot",
    width: 543,
    height: 295,
  },
};

interface portfolioItem {
  id: string;
  title: string;
  desc?: string;
  src: string;
  width: number;
  height: number;
  categories: string[];
  pageLink: string;
  productWebsite: ProductWebsites;
  downloadLink: ProductDownloadLinks;
  features: string[];
  description?: ReactNode;
  metaData: Metadata;
}

export const portfolioItem: portfolioItem =
  // ***** JPG to PDF Converter *****
  {
    id: ProductIDs.JPGtoPDFConverter,
    title: ProductTitles.JPGtoPDFConverter,
    src: `/${headerCompanyName.toLowerCase()}/${productImages.JPGtoPDFConverter.imgName.toLowerCase()}`,
    width: productImages.JPGtoPDFConverter.width,
    height: productImages.JPGtoPDFConverter.height,
    categories: [
      Categories.All,
      Categories.JPG,
      Categories.PDF,
      Categories.Converter,
    ],
    pageLink: `/${ProductIDs.JPGtoPDFConverter}`,
    productWebsite: ProductWebsites.JPGtoPDFConverter,
    downloadLink: ProductDownloadLinks.JPGtoPDFConverter,
    features: [
      "Local & Secure Offline Conversion",
      "Lightning-Fast Conversion Speed",
      "Batch Conversion Made Easy",
      "Simple Drag and Drop Interface",
      "Flexible Conversion Modes",
      "Easily Change Image Order",
    ],
    description: (
      <div className="flex flex-col">
        <strong className="mt-10">
          Introducing the Ultimate JPG to PDF Converter for Windows
        </strong>
        <p className="mt-2">
          Transform your JPG files into PDFs securely and efficiently with our
          powerful desktop software. Designed for Windows users, our JPG to PDF
          converter allows you to perform conversions entirely offline, ensuring
          that your data remains private and secure. Without the need for an
          internet connection, you can confidently convert files on your local
          system, eliminating any risk of data breaches or unauthorized access.
        </p>
        <strong className="mt-10">
          Lightning-Fast and Reliable Conversions
        </strong>
        <p className="mt-2">
          Experience rapid conversion from JPG to PDF with our dependable
          software. Whether you&#39;re working from home, the office, or on the
          go, our tool is engineered to deliver quick and reliable results
          without relying on an internet connection. Convert your JPEG files to
          PDF format in a matter of seconds, no matter where you are, ensuring
          your work is always uninterrupted.
        </p>
        <strong className="mt-10">Effortless Batch Conversion</strong>
        <p className="mt-2">
          Save time and streamline your workflow by converting multiple JPG
          images to PDFs in a single operation. Our batch processing feature is
          designed to handle large volumes of files quickly and efficiently,
          eliminating the tedious task of converting images one by one. Whether
          you&#39;re dealing with a handful of images or thousands, our software
          makes bulk conversion simple and hassle-free.
        </p>
        <strong className="mt-10">Intuitive Drag-and-Drop Interface</strong>
        <p className="mt-2">
          Our user-friendly interface makes file conversion effortless, even for
          beginners. Simply drag and drop your JPG files into the software, and
          you&#39;re ready to start converting. This intuitive feature
          simplifies the process, allowing you to focus on your work rather than
          navigating complex menus.
        </p>
        <strong className="mt-10">Flexible Conversion Options</strong>
        <p className="mt-2">
          Customize your PDF output with versatile conversion modes. Whether you
          need to create separate PDFs for each JPG or combine multiple images
          into a single multi-page PDF document, our software gives you the
          flexibility to meet your specific needs. Tailor the conversion process
          to suit your preferences and ensure your files are organized just the
          way you want them.
        </p>
        <strong className="mt-10">Organize Images with Ease</strong>
        <p className="mt-2">
          Take control of your file order before conversion with our easy-to-use
          MOVE UP and MOVE DOWN buttons. Rearrange your JPG images to determine
          their sequence in the final PDF, giving you complete freedom to
          organize your documents exactly as you envision.
        </p>
        <strong className="mt-10">Designed for High-Volume Conversions</strong>
        <p className="mt-2">
          Need to convert thousands of JPG files in seconds? Our JPG to PDF
          Converter is one of the fastest and most versatile solutions
          available. Ideal for both professionals and casual users, this robust
          software allows you to batch process large collections of JPEG files
          with just a few clicks. Launch the converter, drag and drop your files
          or folders into the conversion list, customize your settings, and hit
          &#34;Convert&#34;—your images will be instantly transformed into
          high-quality PDF documents.
        </p>
        <strong className="mt-10">User-Friendly with Advanced Features</strong>
        <p className="mt-2">
          Not only is our JPG to PDF Converter fast and easy to use, but it also
          offers advanced options for those who need more control over the
          conversion process. Choose to convert each JPG file into a separate
          PDF or merge all your images into a single, multi-page PDF. Adjust
          image quality settings to ensure the final PDF meets your specific
          requirements, making this tool adaptable to a wide range of needs.
        </p>
        <strong className="mt-10">Why Convert JPG to PDF?</strong>
        <p className="mt-2">
          JPG (Joint Photographic Experts Group) is a widely-used image format
          known for its efficient compression, perfect for online sharing.
          However, when it comes to preserving image quality, especially for
          text or line drawings, converting to PDF (Portable Document Format) is
          often the better choice. PDFs are universally recognized and ideal for
          sharing, printing, and archiving documents, offering a combination of
          text, graphics, and images that maintain their quality across devices.
        </p>
        <strong className="mt-10">Conclusion</strong>
        <p className="mt-2">
          Our JPG to PDF Converter for Windows is the perfect solution for
          anyone looking to convert images to PDF with speed, security, and
          ease. Whether you&#39;re handling a few files or thousands, this
          software delivers the efficiency and flexibility you need to get the
          job done. Don&#39;t settle for less—download the best JPG to PDF
          Converter for Windows today and experience effortless file conversion
          at its finest.
        </p>
      </div>
    ),
    metaData: {
      title: `Free ${ProductTitles.JPGtoPDFConverter} for Windows | Fast & Secure JPG to PDF Tool`,
      keywords:
        "JPG to PDF Converter, JPEG to PDF Converter, Convert JPG to PDF, Batch JPG to PDF, Windows PDF Converter, Image to PDF Tool",
      description:
        "Easily convert JPEG files to PDF with our fast and free Windows software. Enjoy a user-friendly interface, batch processing, and customizable settings to ensure top-quality PDF output.",
      alternates: {
        canonical: ProductWebsites.JPGtoPDFConverter,
      },
      openGraph: {
        title: `Free ${ProductTitles.JPGtoPDFConverter} for Windows |  Fast & Secure JPG to PDF Tool`,
        description:
          "Easily convert JPEG files to PDF with our fast and free Windows software. Enjoy a user-friendly interface, batch processing, and customizable settings to ensure top-quality PDF output.",
        url: `https://www.frameworkteam.com/${ProductIDs.JPGtoPDFConverter}.html`,
        siteName: `${ProductTitles.JPGtoPDFConverter} for Windows`,
        images: [
          {
            url: cloudinaryLoader({
              src: `/${headerCompanyName.toLocaleLowerCase}/${productImages.JPGtoPDFConverter.imgName.toLocaleLowerCase}`,
              width: productImages.JPGtoPDFConverter.width,
            }),
            width: productImages.JPGtoPDFConverter.width,
            height: productImages.JPGtoPDFConverter.height,
            alt: `Free ${ProductTitles.JPGtoPDFConverter} for Windows`,
          },
        ],
        locale: "en_US",
        type: "article",
      },
    },
  };
