import { useState, useEffect } from "react";

type UseWishlistReturn = [(id: string) => void, (id: string) => void, boolean];

export default function useWishList({
  pathname,
}: {
  pathname: string;
}): UseWishlistReturn {
  const [isWishlisted, setIsWishlisted] = useState<boolean>(false);

  function addToWishlist(id: string) {
    const oldLocalStorage = localStorage.getItem("wishlist");
    let wishlist = [];

    if (oldLocalStorage) {
      wishlist = JSON.parse(oldLocalStorage);
    }

    if (!wishlist.includes(id)) {
      wishlist.push(id);
      localStorage.setItem("wishlist", JSON.stringify(wishlist));
      setIsWishlisted(true);
    }
  }

  function removeFromWishlist(id: string) {
    const oldLocalStorage = localStorage.getItem("wishlist");
    let wishlist = [];

    if (oldLocalStorage) {
      wishlist = JSON.parse(oldLocalStorage);
    }

    wishlist = wishlist.filter((item: string) => item !== id);
    localStorage.setItem("wishlist", JSON.stringify(wishlist));
    setIsWishlisted(false);
  }

  useEffect(() => {
    const wishlist = localStorage.getItem("wishlist");
    if (wishlist) {
      setIsWishlisted(JSON.parse(wishlist).includes(pathname.slice(1)));
    }
  }, [pathname]);

  return [addToWishlist, removeFromWishlist, isWishlisted];
}
