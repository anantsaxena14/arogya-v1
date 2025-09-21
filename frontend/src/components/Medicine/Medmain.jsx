import React from "react";
import { Star } from "lucide-react";
import {Link} from "react-router-dom";


const medicines = [
  {
    id: 1,
    name: "Paracetamol 500mg",
    description: "Pain relief & Fever",
    quantity: "10 tablets",
    rating: 4.5,
    reviews: 1250,
    distance: "0.5 km away",
    price: 25,
    oldPrice: 30,
    discount: "17% OFF",
    status: "In Stock",
    image: "data:image/jpeg;base64,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DVTHJ6LynBrZTC0h25XFTXRv7Gc92TTpJPrY7sYMH0Z/pOCwvMIp/RnzO0iZpJz59FOqjTlKWc+4z1cn1vD3HQ4XqJh9JhbVNa2SVga9rRsdjhZauEf+PezuNuhf6kG/ej1/lx/YC8ruZ6DBQwRn6oU7mMFvo8X2PvTcxgu5Mf2G/JRuYwBDGPqN+SbmMF7WhvqjCjOSSqAIAgCAIAgCAIAgCAh30nXF1Jw6aOI/7RcJBBGO46u+78VZ9EU79QpS5R4/Y5NbZsq+JEKJt2tdoMTJ4ByIzklm+B7Srmx0W27pJ8TzjlLdwIvwrDWXK6SXGlla17H8x73jPXIxj4Lu1FlcKVGS4M3W9lbe86XHldchDSU9ZLG9kx1MEbcAlvcfJc+hjSnmC4mNKlLLl3HT4WF3pbRG2N9O0TZfGyRucA7rVrPR525afA1ybTxAjNG6vq+J8xkel88+Jx2BHVd8nXDT4a7JseNhIuM6i7Osr3SPpzBrbzOWwg9RhcGjhSrOynnuMa23NKRi4EkuRt0jopImwcwholZk588dlnr+plYty4k25jLgYYH1MH0jW2SpIc987MvG2x2G3l1Wc9suj5qHLB0aF4nFvnk9xC8YejKoAgCAIAgCAIAgCAIAgCAIAgCA8e+lK41buJ6YMp5uVb2AsdoOHF27iPkB8F6foeFcdNKUpLtfQqNep2TUIo5N94lmqbQ+CGOXMjdJaIiCR7V0V0VQluyvmVldF7niS4HM4TujrJUOY/LWSsaN2ZG2eufeujUV13RST4m2+q6S3RRbxPdzdrhFJpc5sTTjDMAZWWmhXTFxzx+JFVN21uS5natHFoprSyJzsSMbpGY8u6Lnu0cJ2bu74mqdV6k0lwIzbrkaa6trS5wPMLycb7rsmq5V7M+ZunRZtxg7vF3FDa2hZSslaNT8nSzHRcum0qpnukaaYXSfaRi4S4mit8UtO6ePRr1gOGQs9Tpo3vdEm6F0GtqLILnUXjjK3z0lPNUFtVCDyoyQ1oeMk42AxlYzddGlnXJ4bT+h06TTzypPxPoFvVeLPQlyAIAgCAIAgCAIAgCAIAgCAIAgKAAJgFUBY6KN/rxtd7xlBgcmLGOWz/CEyMFnolNnPo8X+AKdzIwippqdww6CIjsWBMsnBj/R9F/ydP8A9Jv8lO+XiRhFrrZQOOXUNMT7YW/yTfLxG1GaCngp2ltPDHE09Qxob+ChtvmEkjLjCgkIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgMPMPYIBzD2CAcw9ggHMPYIBzD2CAcw9ggHMPYIBzD2CAcw9ggHMPYIBzD2CAcw9ggHMPYIBzD2CAcw9ggHMPYIBzD2CAcw9ggHMPYIBzD2CAcw9ggHMPYIBzD2CAcw9ggHMPYID/9k=",
  },
  {
    id: 2,
    name: "Cough Syrup",
    description: "Cough & Cold",
    quantity: "100ml bottle",
    rating: 4.2,
    reviews: 890,
    distance: "1.2 km away",
    price: 85,
    oldPrice: 95,
    discount: "11% OFF",
    status: "In Stock",
    image: "data:image/jpeg;base64,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",
  },
  {
    id: 3,
    name: "Amoxicillin 250mg",
    description: "Antibiotic",
    quantity: "10 capsules",
    rating: 4.7,
    reviews: 2100,
    distance: "2.1 km away",
    price: 120,
    oldPrice: 140,
    discount: "14% OFF",
    status: "Nearby Pharmacy",
    image: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAJQAsQMBIgACEQEDEQH/xAAcAAEAAwADAQEAAAAAAAAAAAAABAUGAQIDBwj/xABIEAABAwIDAwcFDAkEAwEAAAABAAIDBBEFEiETMUEGFCJRYXGBMnKRscEHFTVSU3STobLR4fAWIzM0QmJzgpJVY2TxJIPSF//EABoBAQACAwEAAAAAAAAAAAAAAAADBAECBQb/xAAwEQACAQQBAgQDBwUAAAAAAAAAAQIDBBESMQUhExQyUTNhoRUiQVKBsfEjQkNxkf/aAAwDAQACEQMRAD8A+4oiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIo9fVNoqOapex72xNLi1guSFBOLtZGx8rGMDxpmf2XtuWHJIyk2WyKBz6TcYW388/cnPpPkW/SfgsbIasnooArpPkWfSfgnPZPkmfSH7k2Q1ZPRQOey/Is+kP/AMpz2X5Fn0h+5NkNWT0UDnk3ycX+R+5UnKflVJgFPBM+kZNtXlthIW2sL9SzF7PCNZtU4uUuDVIvmf8A+pn/AEoW/r/guYvdOklkYwYYwZnBt9qdL+Cl8GfsVfPUPc+losvRco6l0Rnq6eNkRHRa0kHv18VIPKaLLcQE/wB9vYo325LcfvJNGgRZ9vKaM2/8YgnhtPwXYcomnUUt/wD2fgsbIzqy+RZms5WR0sed9KSL20k4+hR5uWsUdgaTf/u6+pY2RnVmuRY79OYt3NR9J+CkR8rNpbLTNI7H/gmyGrNSizsfKZmdu0piGn+IFX0ErJoWSxm7HC4Kynkw1g9ERFkwQMdF8Grv6D/UqPEqaOrwv9bK6FrGZ9qP4BYE6X10HHTrBGivsa+B675tJ9kqjraV9dhTaRrsrJcglN9dnoXAdpAt4qOZJA5ocVpp8Mp62Z4pmyi2WoIY5rhe7SLnUEHS5XvDX0U+bY1lO/K3O7LK02b1nXd2qBDhM8OKRTNlz0zKs1XTPSDnQujcB2XLT4uXhJglQ+jp4dpFmhpZIiL6FxkY8eHRN+9aG5cR1tJKwPiqoHtIcQWyA6N8o+FxfquvRk8MjWuZNE5r3FrSHjUi9x4WPoVFiODVWI7Z8hihdJOJ7XzEFrA1rT2O1zfy3HHTznwqbE6jF4nkw08lM+OIuY4ATSsAkNiBmADRYjfmegLyKvpZhG6nnjmZI8sD45GkXAv19S8YsXp5WMc1rwHQxS9KzbCRxaBqd9wuppquoqoaieGCAxz7TKw3cRsy3V24m59FlCbglSKaKPPGC2npIjrxim2jvq3JgwXEdZSyzugiqoHzC942yAu036diyPumxOnp8KghaXSSVLmNA6yAB61oqPDpqeSlc8sIimqpHWPyjy4evVVXLeuOGTYRWtozVuhlkLY7kAHKACbA9qko+tYK93h0WpcFNj3IqjpsGkkw58klbSMa+YF9y8WN7DhxI7rKRS8iKMYZC2RzvfjYicgyaXB3W6twv1rNUXK6touUNXir4Q81N2vgc4gNaPJF+zu4nrXdnKmrn5Uw4ts2tNtlsbmwZ8W/1q3pW9zk+JaN51+X6e5saqF8lIGAlpygEnqsFVMweYG7XvsRpcq+qX54A86OIBHZddY69pGUxHMNNOK8/wBSqXccOgv9npLdUte5WRYfUNvvdbSziu4gq2E5GRi2ouTqVbMrGOBDWa9pXrHUtc4hwA7O7tXMjX6nldvoieSpexka+WSvonbJpZL/ABMPAj2KI/k3WPiiJqZA7Qlrd3ctBiEjOdbRgyMIsIwd3b+ezxme+DYoYy+MO08om110L2peKEXRXf8AEjpxp5eTHt5OVcbrmomNu4exTqbDK1rmm/RB1uVoI8SgkeAYXMJOlx+etesNZES1zQQCSNQuZ5nqmePoixrRxwUrKmaGrNJUu13sfwdxtbwW+5O5hhjQ7g4hZLEo4ah0bWxWfnzOfpbdoB23IPgtZybBbhbAd+Y+tejtZTlBOfJQrJfgWqIitlcg458C1/zaT7JVLVzSQYZEYjle90UQfa+TO5rb+AJV1jvwJiHzWT7JVYWQSUIZU5dk5gzAut1a34d6jmbwIz5ZKCV4NW2ZrnsyNqHi8dweoXdcjQWve/DdEix58tLzqOltC2liqXlzyDZxIIAtvFjvspPMcNAbI9zswlziZ1S8vz5S3RxdmHRLhbdYlR/ezCKWdjXTlsToI4o4HVD7ENcSM13dIEut0u5aG57Pxl8MtUySmDNjmLWOfZ7gHtaHAW1aQ69wTbcddB3qsTeytjj1jjjqjHKRrnaIHSeu27qXu7CKJ8kjpIpHl4e0h0ryGh5Bdl16NyAdLL0hwykic14icXiXa5pJHPJcWlhNyTfom1tydjJX02N1E1NtuYyNBbE/OGSZWteHb+jc5bakC3SBvbdIr62RuE09TC5jXST0rbxuDwWvmY02PG7XHVekWDUUMeSNkrbZMrucSZmBoIaA7NcAAnTdqete5oaY0rKXZfqI3Me1mY+U1wc03vc9IA67+N0MELFZpm4hTQROqwx8Uri2lDM2YFttX6cSs1y4bnwrCvfcxioDXl+oF32boCNN3V4LZOo6e5cWPJyvbmEjswDjdwBvp7OFllPdCZT1EGHsnlbGA92Xag3cbDdr61LR9aK938FnzafXZ3cS/LfXq4X8PYu1H+9ReeFKxHDjTMM76uKV73AkAam+t1Fo/wB7i84Lqrg8xNNPufUKwP5m0R2zlotc24KoY2tbYtBPYVeSR7SmjOl2tBA69FKY6EAD6t68n1K4uKLXhLOfke2towcPvFIyWpDRmjN7aruKx7b543GwFxb8FdZqfrF+5P1EhIA16xvXLj1C+zhw+jLLhSMlitUx8V6Y5ra249x7fz3csNXsW7RtmFvadfDrUrGaWCkxNlTTsIgMeQjUEkfn88bZlRh5ia4OsD12XVvK9xTjF0488lekoNvYy8rq9jAGR6AnjqBw4/m6mUdbOAwOjcHk2NwdB2q+bJQk2dI0uduuRqV6htIH3dl13WsuVK/voyw4fQs60muxUQVTZiQf2gI03Bw7Pz1rbcnr+93ZnOXu0WWnpKdzc8AIkbJfXiLH71q8BFsPbf4xXo7WbnFNrBQrJLsiyREVorkHHBfBa8f8aT7JVNWOyYWJOac6e0MyRWvd1xY8bAGxuNRa4V1jPwPXfNpPslQKfWni7WD1KOZJAoxSw5GTzvxEySTvlmlp2OZ0ywNHR35bAAb9RqvB0FaaKpjqKeZ9TVUMUbXAX6d33Djw8oErUXOvai0yb4IFfTmoraBjzKacCTbBj3NaeiLXsdVSw09bBh9I6Z1WDJR0vPCZ3FxkzjOLk+UbkG2/dwC1QJ06JHauJI2SxujlY17HCzmvFwR3JkFZgcrclS1vODHzuUR7TMcgFtLnUDqHgrZdIYo4ImxwxsjjbuYxoDR3BdRU05k2YqIS/wCJtG39Cc8GuUj1WC91f93w0fzyeoLfLAe6x+ww3z3+oKW3+IirfP8AoNnztoA3ADuCkUetZD5wUcFe9Cb1kPnLrHmWfUqmUw0kZAJOUWtvvZV0VRUMeC6maBfe7RWz4s8dMTo1uUk9WikmmjJF7FeQ6h1GVtPSMcnuLenGUE2yqGIkEZmkX6v+16R17LkOkcL8SPxVgaSEnVrV0NBTnNoCTpb71z/tmpn0FjwafuUeNzNdSMkiIkAJIy63v/0quXEJxE1vNNob31sbfirjFKGGiqohG8vhcziOiDfW359VjYxUELoo3NykZRY2V+96hK3pwenJFSpxlJ5ZmYa6Zzcz6QsA1I007vzwVnRYrGYQ58eUDrbqFaDDoQNy9Bh1KALNYCeNrrmLrU2/QTypQS5I1NVwVErgx5Lm2zX3tvuWvwYWogL/AMRWPmwiCGeOqpXbObagENGjm5Te/wBVu2y1+Dkmj135rfUF6W2nvFSxjJz6yxwWCIitEBDxf4Jrfm8n2SqHEq/3swCasbkzxQAsEnkl9rNB7LkK/wAV1wusH+w/7JVTzaGqooo6iJkjLNdleLi41Bt3rSWO2TZZaeDLHlZXupIZYWUTpXUNTLIcji3axSNYLdLydSeJ3arzj5Y1+aUyU9MGQ0BkkAY6+3aWhw8ryRm3b+1ap2D4a8vJoKcl4cHExjpB1swPflF+5cOwmhzOLKOmu8Pa+8TTmD7Zh42F+5bb0/Yh8Kt+YztbymxDD6WaSQUTpIKs0pJa5olJjDmuHS0AO/fp1KczG66DG56LEBTNpaeMSyzxQvcXNdlDAACSDmz336AL3GDOYxsTKLD3MbmHSYNA7RxAtxHivdlHiMUrZqdlBFJshESGHUDyRfTQdW7Uo5Q9jMadXPeRksQrv0kxysoaqathw6mANqdwjaGcXyFwPA6Ntqquk5LYbWU9IaaadzpJYhK59mhrHyFoIaWamwH8W9brE+Tzq15qqWumw+vkY0TSUxs2W3WOzXVUH6FY29rYX8oLwNk2gblfo6972vvvqpoVY4wpYKdWhNyzKOx74BVS4VjmH4VDNUz0NdA97WVDto6BzM2ocANDl3W4qN7rOkGGee/1BanBsBiw2V1VNUz1tc5mzdUzm5DfitHALK+61+ywwfzP9QWtOSlVWDevCULWSf8AB88uvehsayLzlGupWGZDiEAlLmszaloudy6RwGj63PI2GiY9+4xj1AKrbWxmZrNm9z2jNe1wDYcVa1QDqOJvSDS1ozWB0sozMKpyeiXl27U8F5S+vfLvGMntrempJNs6sr4XtDsrwbcV6MnhdoDY95t9y7+9MJFiTbvXDsIiDCG8dNDZctdYjnCplrwY/mK3Gn7OMvO7QhQZcQp2QNFnnj0WkgaKTiuHupXwxSOLonRgvZfRp4C/59hnMwZjomHfcA2uujeX0LeEd45yQ0qezfcqIsRgiEe12rXaFue47t/eryKoiktFJcmwdZz9SPzZeE+ECQlr3F3DpFd2YU9r2vbUS5h2XVKl1WjN4UP2JpUcL1E+F7ZJQGuBF/E/itHhRzUxP83sCycNEYKvb7Wzr2e3KdRb2G3q4rWYULUh49L2Bd23mprZFCr2JyIiskJExX4LrP6D/slV1L+7ReYPUFY4t8FVnzd/2Sq6m0p4vMHqUcySB6hcrhcrQ3OerXciIgOUREMBfPvdb/Z4b50nqC+gr577rh6GGd7/AGKa2+KipffAkfOuK96EnnsVutRrqRQ3NZFbrXXXJ5h8H1fbsdSU5zaBrdCd+i8osUY5wEk7mkmwDRfrUSmbziGMMvpoOq6sIsIdH5MpB42AsvIdSuqFKajUjn9D29tBygnnBLFbG0W2h/uAXArYnkt2jOzcFHdhUj9XSl1+wFePvIWC4Jvfq3LnLqdumsU/oWvByu8jtjjmuoszzlIdlBG/wuoDMWfGxgdWBjRbS4+rRSa+inipKOnlcSyVrnFp1OhFvWo0WBZow8dEHXU3+tdG8uqEKcXVjnJDSpuUnhkiDFnSC4qmPFrbgb9qnR1Wa15gTxFlXvwmTY7G7MvCzPavOLCahjwGnRcvzfT3/jRY8GePUX8MgDxfW/Gy0WF/up84rHUNNUse+R13xsc24vuvusthhX7rx8o+xehtJxqQUocFCvHVkxEXKuFcg40bYNXn/jSfZKqqieamoIpKeAzuLomFovo1zmtLtAdwJPhwWhexsjHMe0Oa4WII0IXTm8YFgxotusFpKOTaMsGXpsWqpqRr3YdNHOaYzbMtcACDbLfLe9tdy8jjNeyLauwucgGS7Gxvc5waGkAabySRc6HLotdsWfFHoTYs+KPQsaGdzHDlBVvY4wYLWk53MYcjt4zanTddtvFWOF189a6UT4fPSZA0/rQRmJvcbhqLC/etBsWfFHoXOyZ8UehY0M7lcgCsdkz4rfQuNjF8RvoTw2NyBZfP/dYjD24ab7jJ7F9P2MXxG+hR6vC6Csy87pIJsvk7RgNlJSWktiC4j4tNwXY/OwgHWPSpeHYdNLWRFo0vr6F92/R7Bv8AS6P6Fq5HJ/B2kFuGUgI4iEK35n5HM+zXxsYTDOcvYDHC5wjIbKWi9j2q+hfVEgOzNFteitRT0dPS5ubRMizeVkaBde9u1c+vb0a0tpRTOtRlOnBRb7mYBeBqPWum06WuoWqshCgXT7dPKgv+E3jSMTilpKU3AIab9ZUWnxWobE1myYQ0DW+9b8xtO9oPguuxj+I3/EKSra0qyxUWTEarjwYmDETOOlE0f3KRHUkmxyi3ataaeE74o/FoXHNYPkY/8Aqj6PaP+39zfzMjL7Rj5A0Eb7269FosLY9lIM4sSSbdi9W0dO03bDGD15QvYCy6EKagsIilJy5OURFIaBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQH//2Q==",
  },
];

export default function MedicinePurchase() {
  return (
    <div className="flex bg-blue-50 min-h-screen p-6">
      {/* Sidebar */}
      <div className="w-44 bg-white rounded-xl shadow p-4 mr-6">
        <h2 className="font-semibold text-lg mb-3">Filters</h2>
        <div className="mb-4">
          <p className="font-medium text-gray-600">Price Range</p>
          <input type="range" min="0" max="1000" className="w-full" />
        </div>
        <div className="mb-4">
          <p className="font-medium text-gray-600">Ratings</p>
          <div className="space-y-1 text-sm text-gray-500">
            <label><input type="checkbox" /> 4+ Stars</label><br />
            <label><input type="checkbox" /> 3+ Stars</label><br />
            <label><input type="checkbox" /> 2+ Stars</label><br />
            <label><input type="checkbox" /> 1+ Stars</label>
          </div>
        </div>
        <div>
          <p className="font-medium text-gray-600">Available Distance</p>
          <div className="space-y-1 text-sm text-gray-500">
            <label><input type="checkbox" /> Within 1 km</label><br />
            <label><input type="checkbox" /> Within 2 km</label><br />
            <label><input type="checkbox" /> Within 5 km</label><br />
            <label><input type="checkbox" /> Within 10 km</label>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <input
            type="text"
            placeholder="Search by medicine name, purpose, or brand..."
            className="w-2/3 px-4 py-2 border-white shadow bg-white rounded-lg"
          />
          <select className=" px-4 py-2 bg-white border-white shadow rounded-lg">
            <option>Sort by: Relevance</option>
            <option>Price: Low to High</option>
            <option>Price: High to Low</option>
            <option>Rating</option>
          </select>
        </div>

        {/* Medicine Grid */}
        <div className="grid grid-cols-3 gap-6">
          {medicines.map((med) => (
            <div key={med.id} className="bg-white rounded-xl shadow p-4">
              <img src={med.image} alt={med.name} className="h-24 mx-auto mb-3" />
              <h3 className="font-semibold text-gray-800">{med.name}</h3>
              <p className="text-gray-500 text-sm">{med.description}</p>
              <p className="text-gray-400 text-xs">{med.quantity}</p>

              {/* Rating */}
              <div className="flex items-center mt-2 text-sm text-gray-600">
                <Star className="h-4 w-4 text-yellow-500 fill-yellow-500" />
                <span className="ml-1">{med.rating}</span>
                <span className="ml-2 text-gray-400">({med.reviews} reviews)</span>
              </div>

              <p className="text-xs text-gray-500 mt-1">{med.distance}</p>

              {/* Price */}
              <div className="flex items-center mt-3">
                <span className="text-lg font-bold text-gray-800">₹{med.price}</span>
                <span className="ml-2 line-through text-gray-400">₹{med.oldPrice}</span>
                <span className="ml-2 text-green-600 font-medium">{med.discount}</span>
              </div>

              {/* Buttons */}
              <div className="flex gap-2 mt-3">
                <button className="bg-blue-600 text-white px-3 py-2 rounded-lg text-sm hover:bg-blue-700">
                  <Link to="/AboutMed" >Add to Cart</Link>
                </button>
                <button className="border-white shadow text-gray px-2 py-2 w-[80px] rounded-lg bg-green-100 text-sm hover:bg-gray-100">
                  Check Availability
                </button>
              </div>

              <button className="text-sm text-blue-600 mt-2">
                View Substitutes (2)
              </button>
            </div>
          ))}
        </div>
      </div>

      
    </div>
  );
}
