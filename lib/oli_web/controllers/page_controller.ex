defmodule OliWeb.StaticPageController do
  use OliWeb, :controller

  def index(conn, _params) do
    render(conn, "index.html")
  end
end
