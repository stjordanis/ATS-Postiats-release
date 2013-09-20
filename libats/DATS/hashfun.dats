(***********************************************************************)
(*                                                                     *)
(*                         Applied Type System                         *)
(*                                                                     *)
(*                              Hongwei Xi                             *)
(*                                                                     *)
(***********************************************************************)

(*
** ATS - Unleashing the Potential of Types!
** Copyright (C) 2002-2010 Hongwei Xi, Boston University
** All rights reserved
**
** ATS is free software;  you can  redistribute it and/or modify it under
** the  terms of the  GNU General Public License as published by the Free
** Software Foundation; either version 2.1, or (at your option) any later
** version.
** 
** ATS is distributed in the hope that it will be useful, but WITHOUT ANY
** WARRANTY; without  even  the  implied  warranty  of MERCHANTABILITY or
** FITNESS FOR A PARTICULAR PURPOSE.  See the  GNU General Public License
** for more details.
** 
** You  should  have  received  a  copy of the GNU General Public License
** along  with  ATS;  see  the  file  COPYING.  If not, write to the Free
** Software Foundation, 51  Franklin  Street,  Fifth  Floor,  Boston,  MA
** 02110-1301, USA.
*)

(* ****** ****** *)
//
// HX-2013-09:
// A collection of hash functions
//
(* ****** ****** *)

staload
UN = "prelude/SATS/unsafe.sats"

(* ****** ****** *)

staload "libats/SATS/hashfun.sats"

(* ****** ****** *)

(*
fun{}
inthash_jenkins (uint32): uint32
*)
(*
** HX-2013-08:
** This one by Robert Jenkins
** is a full-avalanche hash function
*)
/*
uint32_t
atscntrb_inthash_jenkins
  (uint32_t a)
{
  a = (a+0x7ed55d16) + (a<<12);
  a = (a^0xc761c23c) ^ (a>>19);
  a = (a+0x165667b1) + (a<< 5);
  a = (a+0xd3a2646c) ^ (a<< 9);
  a = (a+0xfd7046c5) + (a<< 3);
  a = (a^0xb55a4f09) ^ (a>>16);
  return a;
}
*/
implement{}
inthash_jenkins (a) =
  $extfcall (uint32, "atscntrb_inthash_jenkins", a)
//
(* ****** ****** *)

(*
fun{}
string_hash_multiplier
(
  K: ulint, H0: ulint, str: string
) :<> ulint // endfun
*)
implement{}
string_hash_multiplier (K, H0, str) = let
//
#define CNUL '\000'
//
fun loop
(
  p: ptr, res: ulint
) : ulint = let
  val c = $UN.ptr0_get<char> (p)
in
//
if c > CNUL then
(
  loop (ptr_succ<char> (p), K*res + $UN.cast{ulint}(c))
) else res // end of [if]
//
end // end of [loop]
//
in
  $effmask_all(loop (string2ptr(str), H0))
end // end of [string_hash_multiplier]

(* ****** ****** *)

(* end of [hashfun.sats] *)
