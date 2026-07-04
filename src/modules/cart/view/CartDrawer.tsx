import { Icon } from "@iconify/react";
import { Link } from "react-router-dom";
import strings from "../../../common/constants/strings";
import { useAppDispatch, useAppSelector } from "../../../store/hooks";
import {
  closeDrawer,
  decrementItem,
  incrementItem,
  removeItem,
  selectCartItems,
  selectCartSubtotal,
  selectIsCartDrawerOpen,
} from "../cartSlice";

function CartDrawer() {
  const { cart } = strings;
  const dispatch = useAppDispatch();
  const isOpen = useAppSelector(selectIsCartDrawerOpen);
  const items = useAppSelector(selectCartItems);
  const subtotal = useAppSelector(selectCartSubtotal);

  return (
    <div
      className={`fixed inset-0 z-[60] transition-opacity ${
        isOpen ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
      }`}
      aria-hidden={!isOpen}
    >
      <div
        className="absolute inset-0 bg-black/40"
        onClick={() => dispatch(closeDrawer())}
      />

      <div
        className={`absolute right-0 top-0 flex h-full w-full max-w-sm flex-col bg-white shadow-xl transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between border-b border-neutral-200 px-5 py-4">
          <h2 className="font-serif text-lg text-neutral-900">{cart.title}</h2>
          <button
            type="button"
            aria-label="Close cart"
            onClick={() => dispatch(closeDrawer())}
            className="text-neutral-500 hover:text-primary-600"
          >
            <Icon icon="mdi:close" width={22} height={22} />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto px-5 py-4">
          {items.length === 0 ? (
            <div className="flex h-full flex-col items-center justify-center gap-3 text-center">
              <Icon icon="mdi:cart-outline" width={40} height={40} className="text-neutral-300" />
              <p className="font-medium text-neutral-900">{cart.emptyHeading}</p>
              <p className="text-sm text-neutral-500">{cart.emptyMessage}</p>
              <Link
                to="/shop"
                onClick={() => dispatch(closeDrawer())}
                className="mt-2 inline-flex items-center rounded-full bg-primary-600 px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-primary-700"
              >
                {cart.continueShoppingCta}
              </Link>
            </div>
          ) : (
            <ul className="flex flex-col gap-5">
              {items.map((item) => (
                <li key={`${item.slug}-${item.variant}`} className="flex gap-3">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="h-16 w-16 shrink-0 rounded-lg object-cover"
                  />
                  <div className="flex flex-1 flex-col gap-1">
                    <div className="flex items-start justify-between gap-2">
                      <p className="text-sm font-medium text-neutral-900">{item.title}</p>
                      <p className="text-sm font-medium text-neutral-900">{item.price}</p>
                    </div>
                    <p className="text-xs text-neutral-500">{item.variant}</p>
                    <div className="mt-1 flex items-center justify-between">
                      <div className="flex items-center gap-2 rounded-full border border-neutral-300 px-1.5 py-0.5">
                        <button
                          type="button"
                          aria-label="Decrease quantity"
                          onClick={() =>
                            dispatch(decrementItem({ slug: item.slug, variant: item.variant }))
                          }
                          className="flex h-6 w-6 items-center justify-center text-neutral-600 hover:text-primary-600"
                        >
                          <Icon icon="mdi:minus" width={14} height={14} />
                        </button>
                        <span className="w-4 text-center text-xs font-medium text-neutral-900">
                          {item.quantity}
                        </span>
                        <button
                          type="button"
                          aria-label="Increase quantity"
                          onClick={() =>
                            dispatch(incrementItem({ slug: item.slug, variant: item.variant }))
                          }
                          className="flex h-6 w-6 items-center justify-center text-neutral-600 hover:text-primary-600"
                        >
                          <Icon icon="mdi:plus" width={14} height={14} />
                        </button>
                      </div>
                      <button
                        type="button"
                        aria-label={cart.removeLabel}
                        onClick={() =>
                          dispatch(removeItem({ slug: item.slug, variant: item.variant }))
                        }
                        className="text-neutral-400 hover:text-error-600"
                      >
                        <Icon icon="mdi:trash-can-outline" width={18} height={18} />
                      </button>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>

        {items.length > 0 && (
          <div className="border-t border-neutral-200 px-5 py-4">
            <div className="flex items-center justify-between text-sm font-semibold text-neutral-900">
              <span>{cart.estimatedTotalLabel}</span>
              <span>£{subtotal.toFixed(2)}</span>
            </div>
            <p className="mt-1 text-xs text-neutral-500">{cart.taxesNote}</p>
            <Link
              to="/checkout"
              className="mt-4 inline-flex w-full items-center justify-center rounded-full bg-primary-600 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-primary-700"
            >
              {cart.checkoutCta}
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}

export default CartDrawer;
