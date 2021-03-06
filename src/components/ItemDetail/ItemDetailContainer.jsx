import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import FocusImg from "../Utilities/FocusImg";
import ItemDetail from "./ItemDetail";
import Icon from "../Utilities/Icon";
import Button from "../Utilities/Button";
import { useNavigate } from "react-router-dom";
import { doc, getDoc, getFirestore } from "firebase/firestore";

const ItemDetailContainer = () => {
  const { itemId } = useParams();
  const [product, setProduct] = useState({});
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();
  const [showFocus, setShowFocus] = useState(false);
  const [sourceFocus, setSourceFocus] = useState("/images/brand.png");
  const activeFocus = (imgSource) => {
    setShowFocus(true);
    setSourceFocus(imgSource);
  };

  useEffect(() => {
    let mounted = true;
    const dbFirebase = getFirestore();
    const queryDoc = doc(dbFirebase, "products", itemId);

    getDoc(queryDoc)
      .then((resp) => {
        if (mounted) setProduct({ id: resp.id, ...resp.data() });
        setLoading(true);
      })
      .catch((e) => e);

    return () => {
      mounted = false;
    };
  }, [itemId]);

  const goBack = () => {
    if (navigate.length > 0) navigate(-1);
    else navigate("/");
  };

  return (
    <>
      <div className="flex flex-col  items-center bg-sky-100 min-h-screen">
        <div className="mr-auto w-1/4 mt-3 flex justify-center">
          <Button className={"rounded-full  "} action={goBack}>
            <Icon sourceImage={"/images/back-arrow.png"} />
          </Button>
        </div>
        <ItemDetail item={product} loading={loading} activeFunction={activeFocus} />
      </div>
      <FocusImg active={showFocus} imgSource={sourceFocus} close={setShowFocus} />
    </>
  );
};

export default ItemDetailContainer;
